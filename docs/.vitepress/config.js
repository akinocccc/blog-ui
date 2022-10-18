module.exports = {
  title: "Animation UI",
  description: "Make it interesting",
  lang: "zh-CN",
  cleanUrls: "without-subfolders",
  // base: "/animation-ui",
  // base: "/",
  themeConfig: {
    repo: "vkm0303/animation-ui",
    // repoLabel: "测试",
    docsDir: "./",
    // docsBranch: "master",
    editLink: {
      pattern: "https://github.com/vkm0303/animation-ui/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: "Update Date",
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
      "/component/": sidebarComponent(),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vkm0303/animation-ui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 Akino Chen",
    },
  },
};

function nav() {
  return [
    {
      text: "Guide",
      link: "/guide/introduction",
      activeMatch: "/guide/",
    },
    {
      text: "Components",
      link: "/component//loading/loading",
      activeMatch: "/component/",
    },
  ];
}

function sidebarGuide() {
  return [];
}

function sidebarComponent() {
  return [
    {
      text: "Loading",
      items: [
        { text: "loading", link: "/component/loading/loading" },
        { text: "loading plus", link: "/component/loading/loading-plus" },
      ],
    },
    {
      text: "Text",
      // link: "/component/text/text",
      items: [],
    },
  ];
}
