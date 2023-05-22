import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My GenAI Adventure",
  description: "Documenting my journey of learning and discovery of LLM and GenAi",
  base: "/genai-adventure",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' }
    ],

    sidebar: [
      {
        text: 'May 2023',
        collapsed: false,
        items: [
          {
            text: 'Less Is More - LIMA Deep Dive',
            link: '/posts/may_2023/less-is-more-lima'
          },
          { text: 'Some Early Experiments', link: '/posts/may_2023/early-experiments' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vishnuvyas/genai-adventure' },
      { icon: 'twitter', link: 'https://twitter.com/vishnuvyas' }
    ]
  }
})
