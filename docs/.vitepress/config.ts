const { argv } = process;
const env = argv[argv.length - 1];

module.exports = {
  title: "Animation UI",
  description: "Make it interesting",
  lang: "zh-CN",
  cleanUrls: "without-subfolders",
  base: env === "dev" ? "/" : "/animation-ui",
  themeConfig: {
    siteTitle: "",
    logo: "./logo.svg",
    repo: "vkm0303/animation-ui",
    // repoLabel: "测试",
    docsDir: "./",
    docsBranch: "master",
    editLink: {
      pattern: "https://github.com/vkm0303/animation-ui/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: "Update Date",
    nav: nav(),
    sidebar: {
      "/guide/": sidebarGuide(),
      "/examples/": sidebarComponent(),
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
      link: "/examples/loading/loading",
      activeMatch: "/examples/",
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Guide",
      items: [
        {
          text: "What is Animation UI?",
          link: "/guide/introduction",
        },
      ],
    },
  ];
}

function sidebarComponent() {
  return [
    {
      text: "Loading",
      items: [
        { text: "loading", link: "/examples/loading/loading" },
        { text: "loading plus", link: "/examples/loading/loading-plus" },
      ],
    },
    {
      text: "Text",
      items: [{ text: "Text", link: "/examples/text/text" }],
    },
    {
      text: "Orthers",
      items: [{ text: "celebrate", link: "/examples/other/celebrate" }],
    },
  ];
}
