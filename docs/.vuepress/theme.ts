import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Yuwei Bao",
    url: "https://yuweibao15.github.io/",
  },

  iconAssets: "iconfont",

  logo: "/assets/yuwei_photo.JPG",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
    // light_pink: "#fb99ee",
  },
  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Default footer",

  displayFooter: false,

  // pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "PageView"],

  blog: {
    description: "Math PhD Student at Tulane University",
    intro: "/intro.html",
    medias: {
      Linkedin: "https://www.linkedin.com/in/yuwei-bao-571b1b168/",
      GitHub: "https://github.com/yuweibao15/",
      Email: "mailto:ybao2@tulane.edu",
    },
    sidebarDisplay: "always",

  },

  encrypt: {
    config: {
      // "/guide/encrypt.html": ["1234"],
      "/guide/": ["1234"],
      "/posts/": ["1234"],
    },
  },
  

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    components: ["PDF"],

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
