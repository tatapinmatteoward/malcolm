import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nature'S Remedy Hub",
  description: "A modern blog website dedicated to alternative natural medicine, offering step-by-step solutions using nature's remedies to address common health problems. Explore practical guides and holistic approaches for a balanced life.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      { text: 'About Us', link: '/about-us' },
      { text: 'Contact', link: '/contact' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Nature'S Remedy Hub`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#4CAF50' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
