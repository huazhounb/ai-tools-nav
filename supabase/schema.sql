-- AI工具箱 Supabase 数据库结构
-- 可直接复制到 Supabase SQL Editor 执行。

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 用户资料
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  username text,
  name text,
  avatar_url text,
  role text not null default 'user',
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists username text;
alter table public.profiles add column if not exists name text;
alter table public.profiles add column if not exists avatar_url text;
alter table public.profiles add column if not exists role text not null default 'user';
alter table public.profiles add column if not exists status text not null default 'active';
alter table public.profiles add column if not exists created_at timestamptz not null default now();
alter table public.profiles add column if not exists updated_at timestamptz not null default now();
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check check (role in ('user', 'admin'));
alter table public.profiles drop constraint if exists profiles_status_check;
alter table public.profiles add constraint profiles_status_check check (status in ('active', 'disabled'));

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
      and status = 'active'
  );
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, avatar_url, role, status)
  values (
    new.id,
    new.email,
    lower(coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1))),
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data ->> 'avatar_url',
    'user',
    'active'
  )
  on conflict (id) do update
  set
    email = excluded.email,
    username = coalesce(public.profiles.username, excluded.username),
    name = coalesce(public.profiles.name, excluded.name),
    avatar_url = coalesce(public.profiles.avatar_url, excluded.avatar_url),
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.prevent_profile_privilege_self_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() = new.id and (new.role is distinct from old.role or new.status is distinct from old.status) then
    raise exception '用户不能自行修改角色或状态';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_prevent_privilege_self_update on public.profiles;
create trigger profiles_prevent_privilege_self_update
before update on public.profiles
for each row execute function public.prevent_profile_privilege_self_update();

-- 工具分类
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  icon text,
  color text,
  sort_order int not null default 0,
  is_featured boolean not null default false,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- AI 工具
create table if not exists public.tools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text not null,
  long_description text,
  icon_url text,
  official_url text,
  category text,
  free_status text not null default 'freemium',
  chinese_support text not null default 'good',
  platforms text[] not null default '{}',
  audiences text[] not null default '{}',
  tags text[] not null default '{}',
  has_tutorial boolean not null default false,
  is_featured boolean not null default false,
  is_sponsored boolean not null default false,
  sponsor_label text,
  editor_score numeric not null default 0,
  scores jsonb not null default '{}'::jsonb,
  stats jsonb not null default '{}'::jsonb,
  seo_title text,
  seo_description text,
  status text not null default 'published',
  source text not null default 'editor',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.tools add column if not exists long_description text;
alter table public.tools add column if not exists icon_url text;
alter table public.tools add column if not exists official_url text;
alter table public.tools add column if not exists category text;
alter table public.tools add column if not exists free_status text not null default 'freemium';
alter table public.tools add column if not exists chinese_support text not null default 'good';
alter table public.tools add column if not exists platforms text[] not null default '{}';
alter table public.tools add column if not exists audiences text[] not null default '{}';
alter table public.tools add column if not exists tags text[] not null default '{}';
alter table public.tools add column if not exists has_tutorial boolean not null default false;
alter table public.tools add column if not exists is_featured boolean not null default false;
alter table public.tools add column if not exists is_sponsored boolean not null default false;
alter table public.tools add column if not exists sponsor_label text;
alter table public.tools add column if not exists editor_score numeric not null default 0;
alter table public.tools add column if not exists scores jsonb not null default '{}'::jsonb;
alter table public.tools add column if not exists stats jsonb not null default '{}'::jsonb;
alter table public.tools add column if not exists seo_title text;
alter table public.tools add column if not exists seo_description text;
alter table public.tools add column if not exists status text not null default 'published';
alter table public.tools add column if not exists source text not null default 'editor';

create table if not exists public.tool_categories (
  tool_id uuid references public.tools(id) on delete cascade,
  category_id uuid references public.categories(id) on delete cascade,
  primary key (tool_id, category_id)
);

create table if not exists public.tutorials (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text not null,
  content jsonb not null default '{}'::jsonb,
  category text,
  category_slugs text[] not null default '{}',
  related_tool_slugs text[] not null default '{}',
  cover_image text,
  cover_type text not null default 'gradient',
  difficulty text not null default 'beginner',
  estimated_minutes int not null default 10,
  audiences text[] not null default '{}',
  tags text[] not null default '{}',
  views int not null default 0,
  likes int not null default 0,
  seo_title text,
  seo_description text,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.prompts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text not null,
  prompt text not null,
  category text,
  category_slugs text[] not null default '{}',
  related_tool_slugs text[] not null default '{}',
  applicable_models text[] not null default '{}',
  task text,
  variables jsonb not null default '[]'::jsonb,
  example_input text,
  example_output_summary text,
  difficulty text not null default 'beginner',
  tags text[] not null default '{}',
  views int not null default 0,
  likes int not null default 0,
  copies int not null default 0,
  seo_title text,
  seo_description text,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.comparisons (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text not null,
  tool_slugs text[] not null default '{}',
  scenario text,
  recommendation text,
  dimensions text[] not null default '{}',
  quick_advice jsonb not null default '[]'::jsonb,
  faq jsonb not null default '[]'::jsonb,
  views int not null default 0,
  likes int not null default 0,
  seo_title text,
  seo_description text,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  target_type text not null,
  target_slug text not null,
  created_at timestamptz not null default now()
);

alter table public.user_favorites add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table public.user_favorites add column if not exists target_type text not null default 'tutorial';
alter table public.user_favorites add column if not exists target_slug text not null default '';
alter table public.user_favorites add column if not exists created_at timestamptz not null default now();
alter table public.user_favorites drop constraint if exists user_favorites_target_type_check;
alter table public.user_favorites add constraint user_favorites_target_type_check check (target_type in ('tool', 'tutorial', 'prompt', 'comparison'));
create unique index if not exists user_favorites_user_target_unique on public.user_favorites (user_id, target_type, target_slug);
create index if not exists user_favorites_user_created_idx on public.user_favorites (user_id, created_at desc);

alter table public.user_favorites enable row level security;

drop policy if exists "Users can read own favorites" on public.user_favorites;
create policy "Users can read own favorites"
on public.user_favorites
for select
using (auth.uid() = user_id);

drop policy if exists "Users can add own favorites" on public.user_favorites;
create policy "Users can add own favorites"
on public.user_favorites
for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can delete own favorites" on public.user_favorites;
create policy "Users can delete own favorites"
on public.user_favorites
for delete
using (auth.uid() = user_id);

create table if not exists public.rankings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text not null,
  category_slug text,
  ranking_type text not null default 'editor',
  ranking_rule text,
  weights jsonb not null default '{}'::jsonb,
  seo_title text,
  seo_description text,
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ranking_items (
  id uuid primary key default gen_random_uuid(),
  ranking_id uuid references public.rankings(id) on delete cascade,
  tool_id uuid references public.tools(id) on delete cascade,
  rank int,
  editor_score numeric not null default 0,
  reason text,
  created_at timestamptz not null default now(),
  unique (ranking_id, tool_id)
);

create table if not exists public.tool_likes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  tool_id uuid references public.tools(id) on delete cascade,
  tool_slug text not null,
  created_at timestamptz not null default now(),
  unique (user_id, tool_id)
);

alter table public.tool_likes add column if not exists tool_id uuid references public.tools(id) on delete cascade;

create table if not exists public.tool_views (
  id uuid primary key default gen_random_uuid(),
  tool_id uuid references public.tools(id) on delete cascade,
  tool_slug text not null,
  user_id uuid references auth.users(id) on delete set null,
  anonymous_id text,
  ip_hash text,
  created_at timestamptz not null default now()
);

create table if not exists public.tool_clicks (
  id uuid primary key default gen_random_uuid(),
  tool_id uuid references public.tools(id) on delete cascade,
  tool_slug text not null,
  user_id uuid references auth.users(id) on delete set null,
  anonymous_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  type text not null,
  title text not null,
  url text,
  category text,
  description text not null,
  contact text,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending',
  review_note text,
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  published_target_type text,
  published_target_id uuid,
  published_at timestamptz,
  unpublished_at timestamptz,
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.submissions add column if not exists payload jsonb not null default '{}'::jsonb;
alter table public.submissions add column if not exists reviewed_by uuid references auth.users(id) on delete set null;
alter table public.submissions add column if not exists reviewed_at timestamptz;
alter table public.submissions add column if not exists published_target_type text;
alter table public.submissions add column if not exists published_target_id uuid;
alter table public.submissions add column if not exists published_at timestamptz;
alter table public.submissions add column if not exists unpublished_at timestamptz;
alter table public.submissions add column if not exists deleted_at timestamptz;

create table if not exists public.sponsor_slots (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slot_key text unique not null,
  placement text not null,
  title text,
  description text,
  image_url text,
  link_url text,
  label text not null default '合作',
  is_active boolean not null default true,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.tools drop constraint if exists tools_free_status_check;
alter table public.tools add constraint tools_free_status_check check (free_status in ('free', 'freemium', 'paid'));
alter table public.tools drop constraint if exists tools_chinese_support_check;
alter table public.tools add constraint tools_chinese_support_check check (chinese_support in ('excellent', 'good', 'normal'));
alter table public.rankings drop constraint if exists rankings_type_check;
alter table public.rankings add constraint rankings_type_check check (ranking_type in ('editor', 'popular', 'free', 'new', 'user-liked'));
alter table public.submissions drop constraint if exists submissions_type_check;
alter table public.submissions add constraint submissions_type_check check (type in ('tool', 'tutorial', 'prompt', 'comparison'));
alter table public.submissions drop constraint if exists submissions_status_check;
alter table public.submissions add constraint submissions_status_check check (status in ('pending', 'approved', 'rejected', 'needs_edit', 'deleted'));

do $$
declare table_name text;
begin
  foreach table_name in array array['tools', 'tutorials', 'prompts', 'comparisons', 'rankings']
  loop
    execute format('alter table public.%I drop constraint if exists %I_status_check', table_name, table_name);
    execute format('alter table public.%I add constraint %I_status_check check (status in (''published'', ''draft'', ''pending'', ''rejected'', ''archived'', ''deleted''))', table_name, table_name);
  end loop;
end $$;

do $$
declare table_name text;
begin
  foreach table_name in array array['profiles','categories','tools','tutorials','prompts','comparisons','rankings','submissions','sponsor_slots']
  loop
    execute format('drop trigger if exists %I_set_updated_at on public.%I', table_name, table_name);
    execute format('create trigger %I_set_updated_at before update on public.%I for each row execute function public.set_updated_at()', table_name, table_name);
  end loop;
end $$;

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.tools enable row level security;
alter table public.tool_categories enable row level security;
alter table public.tutorials enable row level security;
alter table public.prompts enable row level security;
alter table public.comparisons enable row level security;
alter table public.rankings enable row level security;
alter table public.ranking_items enable row level security;
alter table public.tool_likes enable row level security;
alter table public.tool_views enable row level security;
alter table public.tool_clicks enable row level security;
alter table public.submissions enable row level security;
alter table public.sponsor_slots enable row level security;

drop policy if exists "Public read categories" on public.categories;
create policy "Public read categories" on public.categories for select to anon, authenticated using (true);

drop policy if exists "Public read published tools" on public.tools;
create policy "Public read published tools" on public.tools for select to anon, authenticated using (status = 'published');

drop policy if exists "Public read tool categories" on public.tool_categories;
create policy "Public read tool categories" on public.tool_categories for select to anon, authenticated using (true);

drop policy if exists "Public read published tutorials" on public.tutorials;
create policy "Public read published tutorials" on public.tutorials for select to anon, authenticated using (status = 'published');

drop policy if exists "Public read published prompts" on public.prompts;
create policy "Public read published prompts" on public.prompts for select to anon, authenticated using (status = 'published');

drop policy if exists "Public read published comparisons" on public.comparisons;
create policy "Public read published comparisons" on public.comparisons for select to anon, authenticated using (status = 'published');

drop policy if exists "Public read published rankings" on public.rankings;
create policy "Public read published rankings" on public.rankings for select to anon, authenticated using (status = 'published');

drop policy if exists "Public read ranking items" on public.ranking_items;
create policy "Public read ranking items" on public.ranking_items for select to anon, authenticated using (true);

drop policy if exists "Public read active sponsor slots" on public.sponsor_slots;
create policy "Public read active sponsor slots" on public.sponsor_slots for select to anon, authenticated using (is_active = true);

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile" on public.profiles for select to authenticated using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "Users can read own submissions" on public.submissions;
create policy "Users can read own submissions" on public.submissions for select to authenticated using (auth.uid() = user_id);

drop policy if exists "Users can create own submissions" on public.submissions;
create policy "Users can create own submissions" on public.submissions for insert to authenticated with check (auth.uid() = user_id and status = 'pending');

drop policy if exists "Users can read tool likes" on public.tool_likes;
create policy "Users can read tool likes" on public.tool_likes for select to authenticated using (true);

drop policy if exists "Users can create own tool likes" on public.tool_likes;
create policy "Users can create own tool likes" on public.tool_likes for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "Anyone can insert tool views" on public.tool_views;
create policy "Anyone can insert tool views" on public.tool_views for insert to anon, authenticated with check (true);

drop policy if exists "Anyone can insert tool clicks" on public.tool_clicks;
create policy "Anyone can insert tool clicks" on public.tool_clicks for insert to anon, authenticated with check (true);

-- 管理员写入规则第一版由服务端 API 使用 service role + requireAdmin(event) 控制。

create index if not exists categories_slug_idx on public.categories (slug);
create unique index if not exists profiles_username_unique_idx on public.profiles (lower(username)) where username is not null and username <> '';
create index if not exists categories_sort_order_idx on public.categories (sort_order);
create index if not exists tools_slug_idx on public.tools (slug);
create index if not exists tools_status_idx on public.tools (status);
create index if not exists tools_category_idx on public.tools (category);
create index if not exists tools_created_at_idx on public.tools (created_at desc);
create index if not exists tools_updated_at_idx on public.tools (updated_at desc);
create index if not exists tool_categories_category_id_idx on public.tool_categories (category_id);
create index if not exists tool_categories_tool_id_idx on public.tool_categories (tool_id);
create index if not exists tutorials_slug_idx on public.tutorials (slug);
create index if not exists tutorials_status_idx on public.tutorials (status);
create index if not exists tutorials_category_slugs_idx on public.tutorials using gin (category_slugs);
create index if not exists tutorials_related_tool_slugs_idx on public.tutorials using gin (related_tool_slugs);
create index if not exists prompts_slug_idx on public.prompts (slug);
create index if not exists prompts_status_idx on public.prompts (status);
create index if not exists prompts_category_slugs_idx on public.prompts using gin (category_slugs);
create index if not exists prompts_related_tool_slugs_idx on public.prompts using gin (related_tool_slugs);
create index if not exists comparisons_slug_idx on public.comparisons (slug);
create index if not exists comparisons_status_idx on public.comparisons (status);
create index if not exists rankings_slug_idx on public.rankings (slug);
create index if not exists rankings_status_idx on public.rankings (status);
create index if not exists rankings_category_slug_idx on public.rankings (category_slug);
create index if not exists ranking_items_ranking_id_idx on public.ranking_items (ranking_id);
create index if not exists tool_likes_tool_slug_idx on public.tool_likes (tool_slug);
create index if not exists tool_views_tool_slug_idx on public.tool_views (tool_slug);
create index if not exists tool_clicks_tool_slug_idx on public.tool_clicks (tool_slug);
create index if not exists submissions_status_idx on public.submissions (status);
create index if not exists submissions_type_idx on public.submissions (type);
create index if not exists submissions_user_id_idx on public.submissions (user_id);
create index if not exists submissions_created_at_idx on public.submissions (created_at desc);
create index if not exists submissions_published_target_id_idx on public.submissions (published_target_id);
create index if not exists sponsor_slots_slot_key_idx on public.sponsor_slots (slot_key);

grant usage on schema public to anon, authenticated;
grant select on public.categories, public.tools, public.tool_categories, public.tutorials, public.prompts, public.comparisons, public.rankings, public.ranking_items, public.sponsor_slots to anon, authenticated;
grant insert on public.tool_views, public.tool_clicks to anon, authenticated;
grant select, insert on public.tool_likes to authenticated;
grant select, insert on public.submissions to authenticated;
grant select, update on public.profiles to authenticated;
