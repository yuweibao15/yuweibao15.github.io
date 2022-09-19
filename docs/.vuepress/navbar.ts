import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  { text: "Research", icon: "creative", link: "/research/research.md" },
  { text: "TA", icon: "note", link: "/TA/TA.md" },
  { text: "CV", icon: "blog", link: "/CV/CV.md" },
  // { text: "Guide", icon: "creative", link: "/guide/" },
  ////////////// TEST ///////////////
{
    text: "Notes",
    icon: "edit",
    prefix: "/notes/",
    children: [
      {
        text: "Bioinformatics",
        icon: "edit",
        prefix: "bioinformatics/",
        children: [
          { text: "SRA", icon: "edit", link: "SRA" },
          { text: "Cypress", icon: "edit", link: "Cypress" },
          // "article3",
          // "article4",
        ],
      },
      {
        text: "Statistics",
        icon: "edit",
        children: [
          {
            text: "Detailed balance condition",
            icon: "edit",
            link: "statistics/detailed_balance_condition",
          },
          // {
          //   text: "Article 6",
          //   icon: "edit",
          //   link: "article/article6",
          // },
          // "article/article7",
          // "article/article8",
        ],
      },
      // { text: "Article 9", icon: "edit", link: "article9" },
      // { text: "Article 10", icon: "edit", link: "article10" },
      // "article11",
      // "article12",
    ],
  },

  ///////////// Original ////////////
  // {
  //   text: "Posts",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Articles 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "Article 1", icon: "edit", link: "article1" },
  //         { text: "Article 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "Articles 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "Article 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "Article 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "Article 9", icon: "edit", link: "article9" },
  //     { text: "Article 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "Theme Docs",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/",
  // },
]);
