// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import prismLight from './src/util/prismLight';
import prismDark from './src/util/prismDark';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Whitehill Group",
    tagline: "High quality Roblox assets at affordable prices.",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://support.whitehill.group",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "whitehillgroup", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.

    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

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
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            // Replace with your project's social card
            navbar: {
                title: "Home",
                items: [
                    {
                        href: "/faq",
                        label: "FAQs",
                        position: "left",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "dwpSidebar",
                        position: "left",
                        label: "DWProx Documentation",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "jsmSidebar",
                        position: "left",
                        label: "JSM Documentation",
                    },
                    {
                        href: "https://axon.whitehill.group",
                        label: "Axon",
                        position: "right",
                    },
                    {
                        href: "https://status.whitehill.group",
                        label: "Service Status",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Frequently Asked Questions",
                                to: "/faq",
                            },
                            {
                                label: "JSM Documentation",
                                to: "/jsm",
                            },
                            {
                                label: "DWProx Documentation",
                                to: "/dwprox",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Whitehill Group Discord",
                                href: "https://discord.whitehill.group",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/whitehillgroup",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Whitehill Group.`,
            },
            prism: {
                theme: prismLight,
                darkTheme: prismDark,
            },
        }),
};

export default config;
