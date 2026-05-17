<template>
  <footer class="border-t border-slate-200 bg-white">
    <PageContainer class="py-8">
      <div class="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <p class="text-lg font-black text-slate-950">AI工具箱</p>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            面向中文用户整理 AI 工具、教程、提示词、对比和榜单，帮助你更快找到适合任务的 AI 工具。
          </p>
          <p class="mt-3 text-sm text-slate-600">
            站长邮箱：
            <a class="font-semibold text-blue-700 hover:text-blue-800" href="mailto:nangong3366@gmail.com">nangong3366@gmail.com</a>
          </p>
          <p class="mt-3 max-w-2xl rounded-2xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
            当前网站处于测试阶段，内容会持续更新，部分工具价格、功能和可用性请以官方信息为准。
          </p>
        </div>

        <nav class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4 md:justify-items-end">
          <NuxtLink to="/" class="text-slate-600 hover:text-blue-700">首页</NuxtLink>
          <NuxtLink to="/tools/free" class="text-slate-600 hover:text-blue-700">免费工具</NuxtLink>
          <NuxtLink to="/category" class="text-slate-600 hover:text-blue-700">工具分类</NuxtLink>
          <NuxtLink to="/tutorial" class="text-slate-600 hover:text-blue-700">教程</NuxtLink>
          <NuxtLink to="/prompts" class="text-slate-600 hover:text-blue-700">提示词</NuxtLink>
          <NuxtLink to="/compare" class="text-slate-600 hover:text-blue-700">工具对比</NuxtLink>
          <NuxtLink to="/rankings" class="text-slate-600 hover:text-blue-700">榜单</NuxtLink>
          <NuxtLink to="/submit?type=tool" class="font-semibold text-blue-700 hover:text-blue-800">提交工具</NuxtLink>
        </nav>
      </div>
    </PageContainer>
  </footer>
</template>
