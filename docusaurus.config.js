// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hibiscus Studios',
  tagline: 'We\'re a team of creators helping build high-quality plugins designed for the next generation of Minecraft Servers.',
  url: 'https://docs.hibiscusmc.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hibiscusmc', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/hibiscusmc/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hibiscusmc/docs/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Hibiscus Studios',
        logo: {
          alt: 'Hibiscus Studios Logo',
          src: 'img/studios_logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/HibiscusMC/docs/',
            label: 'GitHub',
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
                label: 'Docs',
                href: 'https://docs.hibiscusmc.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pcm8kWrdNt',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HibiscusMC',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hibiscus Studios. Built with ♥️ using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'groovy'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'TBS9KQC81X',
  
        // Public API key: it is safe to commit it
        apiKey: '55359bcc1c52b8c4f012fe6dee410f22',
  
        indexName: 'indexName: "hibiscusmc",',
      },
    }),
};

module.exports = config;
