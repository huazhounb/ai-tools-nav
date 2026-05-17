<template>
  <section class="rounded-[18px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-violet-50 p-5 shadow-sm">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <span class="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Beta</span>
          <h2 class="text-lg font-bold text-slate-950">测试版上线中</h2>
        </div>
        <p class="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
          本站正在持续补充 AI 工具、教程、提示词和对比内容。如果你发现错误、失效链接或想推荐工具，欢迎联系站长。
        </p>
        <p class="mt-2 text-sm font-semibold text-slate-800">
          联系邮箱：
          <a class="text-blue-700 hover:text-blue-800" href="mailto:nangong3366@gmail.com">nangong3366@gmail.com</a>
        </p>
      </div>
      <div class="flex shrink-0 flex-col gap-2 sm:flex-row">
        <a
          href="mailto:nangong3366@gmail.com?subject=AI工具箱反馈"
          class="inline-flex min-h-10 items-center justify-center rounded-xl border border-blue-200 bg-white px-4 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
        >
          反馈问题
        </a>
        <NuxtLink
          to="/submit?type=tool"
          class="inline-flex min-h-10 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          提交工具
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
