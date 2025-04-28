
import { themes as prismThemes } from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'NBT',
  tagline: 'Tech Enthusiast',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'http://nagvbt.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nagvbt', // Usually your GitHub org/user name.
  projectName: 'nagvbt.github.io', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          onUntruncatedBlogPosts: 'ignore',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",

          feedOptions: {
            type: ['rss', 'atom'],
            title: 'I CAN MAKE THIS WORK',
            description: 'The blog of NBT ❤️🌻',
            language: 'en',
            copyright: `Copyright © 2023 - ${new Date().getFullYear()} NBT.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest
              });
            }
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        gtag: {
          trackingID: 'G-C9LXE3HHDQ',
          anonymizeIP: true
        },
      }satisfies Preset.Options,
    ]
  ],

  themeConfig:
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      algolia: {
        // The application ID provided by Algolia
        appId: 'W4PBBCRQ97',

        // Public API key: it is safe to commit it
        apiKey: 'e7b2813f18e55caef1b2e48d636a4fb4',

        indexName: 'nagvbt',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //b externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/'
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search'

        //... other Algolia params
      },

      navbar: {
        title: 'NBT.',
        logo: {
          alt: 'Nagvbt Logo',
          src: 'img/logo.png'
        },
        items: [
          // To  open  a folder from ./blog
          {
            label: 'Blog',
            to: '/blog',
            position: 'left'
          },
          { label: 'Docs', type: 'doc', docId: 'intro', position: 'left' },
          {
            label: 'Articles',
            to: '/docs/category/articles',
            position: 'left'
          },
          {
            label: 'Tutorials',
            to: '/docs/category/tutorials',
            position: 'left'
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'cpp',
            label: 'C++',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'c',
            label: 'C',
          },


          //  To open a page from '/src/pages' folder
          { label: 'About', to: '/About', position: 'right' },
          { label: 'Bookshelf', to: '/Books', position: 'right' },
          { label: 'Projects', to: '/GithubProjects', position: 'right' },
          {
            label: 'Tools',
            position: 'right',
            items: [
              { label: 'Case Converter', to: '/CaseConverter' },
              { label: 'My Tool Box', to: 'docs/Others/Tools' }
            ]
          },
          {
            label: 'Terms',
            position: 'right',
            items: [
              { label: 'Terms of Use >', to: '/Terms' },
              { label: 'Disclaimer >', to: '/Disclaimer' }
            ]
          },
          // { to: "projects", label: "Projects", position: "right" },
          {
            label: 'Other',
            position: 'right',
            items: [
              { label: 'Blog Archive', to: '/BlogArchive' },
              { label: 'Tags / Categories', href: '/blog/tags' },
              // { label: "Books", to: "books" },
              {
                label: 'RSS feed',
                href: 'https://nagvbt.github.io/blog/rss.xml'
              },
              {
                label: 'Atom feed',
                href: 'https://nagvbt.github.io/blog/atom.xml'
              }
            ]
          }

          // To open ouside link
          // {
          //   href: "https://github.com/nagvbt",
          //   label: "GitHub",
          //   position: "right",
          // },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DOCS',
            items: [
              { label: 'Articles', to: '/docs/category/articles' },
              { label: 'Blog', to: '/blog' }
            ]
          },

          {
            title: 'MISC',
            items: [
              {
                label: 'Blog Archive',
                to: 'BlogArchive'
              },
              {
                label: 'Blog tags / Categories',
                href: '/blog/tags'
              },
              {
                label: 'RSS feed',
                href: 'https://nagvbt.github.io/blog/rss.xml'
              },
              {
                label: 'Atom feed',
                href: 'https://nagvbt.github.io/blog/atom.xml'
              }
            ]
          },

          {
            title: 'EXPLORE MORE',
            items: [
              // {
              //   label: 'Books',
              //   to: 'books'
              // },
              {
                label: 'Disclaimer',

                to: '/Disclaimer'
              },
              {
                label: 'Terms of use',
                to: '/Terms'
              }
            ]
          },
          {
            title: 'FIND ME',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/nagvbt/'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nagvbt'
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/people/Nag-Vbt/100023898528104/'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/NagVbt'
              }
            ]
          }
        ],
        copyright: `© 2010 - ${new Date().getFullYear()} NBT`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' }
      }
    } satisfies Preset.ThemeConfig,
};

export default config;
