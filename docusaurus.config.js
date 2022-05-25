/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CraftingStore',
  tagline: 'Documentation',
  url: 'https://help.craftingstore.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'craftingstore',
  projectName: 'craftingstore-docs',
  themeConfig: {
    navbar: {
      title: 'CraftingStore',
      logo: {
        alt: 'CraftingStore Logo',
        src: 'img/logo-small.png',
      },
      items: [],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      docsRouteBasePath: '/',
      indexBlog: false,
      lunr: {
        titleBoost: 10,
        contentBoost: 0
      }
    }]
  ],
};
