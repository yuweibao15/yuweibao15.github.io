import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "en-US",
  title: "Yuwei Bao's personal website",
  description: "A place to store my stories.",

  base: "/",

  theme,
});
