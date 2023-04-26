// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nag VBT",
  tagline: "Tech Enthusiast",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://nagvbt.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nagvbt", // Usually your GitHub org/user name.
  projectName: "nagvbt.github.io", // Usually your repo name.
  deploymentBranch: "deployment",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All Blog Posts",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Nag VBT",
        logo: {
          alt: "Nagvbt Logo",
          src: "img/logo.png",
        },
        items: [
          // To  open  a folder from ./blog
          { to: "/blog", label: "Blog", position: "right" },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Articles",
          },
          { to: "books", label: "Books", position: "right" },
          //  To open a page from '/src/pages' folder
          { to: "about", label: "About", position: "right" },
          { to: "terms", label: "Terms", position: "right" },

          // To open ouside link
          {
            href: "https://github.com/nagvbt",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Disclaimer",
            items: [
              {
                label:
                  "Opinions expressed here are my personal & don't represent my employer’s view in any way.",
                to: "disclaimer",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/nagvbt/",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/people/Nag-Vbt/100023898528104/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/NagVbt",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Terms of use",
                to: "terms",
              },
              {
                label: "GitHub",
                href: "https://github.com/nagvbt",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nagvbt, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
      },
    }),
};

module.exports = config;
