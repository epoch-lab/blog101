import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BLOG101',
  description: '通过搭建博客来掌握学习计算机科学的基本技能。',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/favicon.webp' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.webp',

    editLink: {
      pattern: 'https://github.com/epoch-lab/blog101/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '根据 CC BY-NC-SA 4.0 许可发布',
      copyright: `By Epoch Lab @ CUIT`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    nav: [{ text: '课程', link: '/course/introduce', activeMatch: '/course/' }],

    sidebar: {
      '/course/': [
        {
          text: '课程',
          base: '/course/',
          items: [
            { text: '引入', link: 'introduce' },
            { text: '认识 Shell', link: 'meet-shell' },
            { text: '安装 Hexo', link: 'install-hexo' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/epoch-lab/blog101' },
    ],
  },
})
