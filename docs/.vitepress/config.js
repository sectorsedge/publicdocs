import { defineConfig } from "vitepress";
import SidebarBuilder from "@stuyk/vitepress-sidebar-builder";

export default defineConfig({
  title: "Sector's Edge Docs",
  descriptions: "Public information about Sector's Edge",
  lastUpdated: true, // use git commit to get page last updated time
  cleanUrls: "with-subfolders", // remove .html from url

  themeConfig: {
    outline: "deep",
    logo: "/favicon.png",
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Introduction",
        link: "/intro/",
      },
      {
        text: "Map Making",
        link: "/mapmaking/",
      }
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: SidebarBuilder.get.filesAndOrder("./docs/intro", ["_partial"]),
      },
      {
        text: "Map Making",
        items: [{ text: 'Getting Started', link: '/mapmaking/index.md' }, { text: 'MagicaVoxel Usage', link: '/mapmaking/magicavoxel.md' }, { text: 'Community Guides', link: '/mapmaking/community.md' },  { text: 'Resources', link: '/mapmaking/resources.md' }],
      },
    ],
    footer: {
      message: "Sector's Edge Public Documentation",
      copyright: "© 2022 Sector's Edge",
    },
    lastUpdatedText: "Last updated",
  },

  head: [["link", { rel: "icon", href: "/favicon.png" }]],
});
