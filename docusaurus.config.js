// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Whitehill Group',
  tagline: 'High quality Roblox assets at affordable prices.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://support.whitehill.club',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'whitehillgroup', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  trailingSlash: false,

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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      navbar: {
        title: 'Home',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'infoSidebar',
            position: 'left',
            label: 'Information',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dwpSidebar',
            position: 'left',
            label: 'DWProx Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'jsmSidebar',
            position: 'left',
            label: 'JSM Documentation',
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
                to: '/docs/jsm',
              },

              {
                label: 'Information',
                to: '/docs/info',
              },
              {
                label: 'DWProx Documentation',
                to: '/docs/dwprox',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Whitehill Group Discord',
                href: 'https://whitehill.club/discord',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/whitehillgroup',
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
