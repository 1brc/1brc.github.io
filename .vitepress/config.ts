import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Surprised this isn't the default. 🤷‍♂️
  srcExclude: ["**/README.md", "**/CONTRIBUTING.md"],

  // https://vitepress.dev/guide/sitemap-generation
  sitemap: {
    hostname: "https://1brc.dev",
  },

  title: "1 Billion Row Challenge",
  description: "Calculate the min, max, and average of 1 billion measurements",

  head: [
    // https://github.com/vuejs/vitepress/issues/560
    ["link", { rel: "icon", href: "/favicon.ico" }],

    // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#license
    [
      "link",
      {
        rel: "license",
        href: "https://github.com/1brc/1brc.github.io/blob/main/LICENSE",
      },
    ],
  ],

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/logo.png",

    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/1brc/1brc.github.io" },
    ],

    // https://vitepress.dev/reference/default-theme-edit-link
    editLink: {
      pattern: "https://github.com/1brc/1brc.github.io/edit/main/:path",
    },

    // https://github.com/vuejs/vitepress/issues/1037
    footer: {
      message:
        'Released under the <a href="https://github.com/1brc/1brc.github.io/blob/main/LICENSE">MIT License</a>.',
      copyright: "Copyright © 2023 The One Billion Row Challenge",
    },
  },
});
