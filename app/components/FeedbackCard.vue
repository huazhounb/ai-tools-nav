<template>
  <section class="rounded-[18px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm">
    <h2 class="text-lg font-bold text-slate-950">这篇教程有帮助吗？</h2>
    <p class="mt-2 text-sm leading-6 text-slate-600">
      如果内容过期、步骤不清楚或你想补充案例，可以联系站长。
    </p>
    <p class="mt-2 text-sm font-semibold text-emerald-800">
      nangong3366@gmail.com
    </p>
    <div class="mt-4 grid gap-2 sm:grid-cols-2">
      <a
        href="mailto:nangong3366@gmail.com?subject=教程反馈"
        class="inline-flex min-h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-emerald-700 active:scale-[0.98]"
      >
        发送反馈
      </a>
      <NuxtLink
        to="/submit?type=tutorial"
        class="inline-flex min-h-10 items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 text-sm font-semibold text-emerald-700 transition hover:-translate-y-px hover:bg-emerald-50 active:scale-[0.98]"
      >
        提交改进建议
      </NuxtLink>
    </div>
  </section>
</template>
