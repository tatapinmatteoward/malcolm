import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Techfix Guru",
  description: "TechFix Guru is a modern blog dedicated to demystifying common tech errors on Windows and macOS systems. Offering clear, step-by-step guides to troubleshoot and resolve issues faced by everyday users, we cover random but prevalent topics like blue screen errors, software crashes, and startup problems to empower readers with quick fixes.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact/' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Techfix Guru`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#1E90FF' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
