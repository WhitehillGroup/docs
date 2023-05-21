// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Whitehill Group',
  tagline: 'High quality Roblox assets at affordable prices',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Whitehill',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'jsmSidebar',
            position: 'left',
            label: 'JSM Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'whSidebar',
            position: 'left',
            label: 'Whitehill Documentation',
          },
          {
            href: 'https://axon.whitehill.club',
            label: 'Axon',
            position: 'right',
          },
          {
            href: 'https://status.whitehill.club',
            label: 'Service Status',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'JSM Documentation',
                to: '/docs/jsm/intro',
              },

              {
                label: 'Whitehill Documentation',
                to: '/docs/whitehill/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Whitehill Discord',
                href: 'https://whitehill.club/discord',
              },
              {
                label: 'JSM Discord',
                href: 'https://discord.gg/jsm',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jsmgroup',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Whitehill Group.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
