module.exports = {
  title: 'Topical Talk Guide',
  tagline: 'Your guide to succeeding in the Topical Talk Festival.',
  url: 'https://topical-talk-guide.io',
  baseUrl: '/Topical-Talk-Festival-Guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'StrawChannel95',
  projectName: 'Topical-Talk-Beginner-s-Guide',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ (
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl:
              'https://github.com/strawchannel95/topical-talk-guide/edit/main/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }
      ),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ (
    {
      navbar: {
        title: 'Topical Talk',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {
            href: 'https://github.com/strawchannel95/topical-talk-guide',
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
                label: 'Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Topical Talk Festival',
                href: 'https://talk.economistfoundation.org/festivals/festival-2025/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/strawchannel95/topical-talk-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} StrawChannel95.`,
      },
    }
  ),
};
