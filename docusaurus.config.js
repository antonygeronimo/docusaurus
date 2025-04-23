// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mi Manual',
  tagline: 'Tu guía personal',
  favicon: 'img/gero.png',

  // Set the production url of your site here
  url: 'https://antonygeronimo.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentacion/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'antonygeronimo', // Usually your GitHub org/user name.
  projectName: 'documentacion', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/antonygeronimo/documentacion/edit/main/',
          routeBasePath: '/', // Configurado para que los docs sean la página principal
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/antonygeronimo/documentacion/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Mi Manual',
        logo: {
          alt: 'Mi Manual Logo',
          src: 'img/gero.png',
        },
        items: [
          {
            to: '/intro',
            label: 'Tutorial',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/antonygeronimo/documentacion',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
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
                label: 'Tutorial',
                to: '/intro',
              },
              {
                label: 'Inspector',
                to: '/inspector/inspector-elementos',
              },
              {
                label: 'Herramientas',
                to: '/herramientas/herramienta-console',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'MDN Web Docs',
                href: 'https://developer.mozilla.org/',
              },
              {
                label: 'Chrome DevTools',
                href: 'https://developers.google.com/web/tools/chrome-devtools',
              },
              {
                label: 'Firefox Developer Tools',
                href: 'https://firefox-source-docs.mozilla.org/devtools-user/',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/antonygeronimo/documentacion',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mi Manual. Creado con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;