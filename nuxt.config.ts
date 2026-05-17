export default defineNuxtConfig({
  compatibilityDate: '2026-05-10',
  srcDir: 'app/',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  runtimeConfig: {
    adminToken: '',
    public: {
      siteName: 'AI Nav',
      siteUrl: process.env.APP_BASE_URL || process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteDescription: '中文 AI 工具选择、上手教程、场景方案和可复制提示词。',
      supabaseUrl: process.env.SUPABASE_URL || process.env.NUXT_PUBLIC_SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY || '',
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
      googleLoginEnabled: process.env.GOOGLE_LOGIN_ENABLED || 'true',
      wechatLoginEnabled: process.env.WECHAT_LOGIN_ENABLED || 'false'
    }
  },
  nitro: {
    routeRules: {
      '/': { prerender: true },
      '/robots.txt': { prerender: true },
      '/sitemap.xml': { prerender: true }
    }
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-light'
        }
      }
    }
  }
})
