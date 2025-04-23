// @ts-check
const {themes} = require('prism-react-renderer');
const React = require('react');
const {
  FaBook, 
  FaCode, 
  FaLaptopCode, 
  FaFileAlt,
  FaTools,
  FaSearch
} = require('react-icons/fa');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      link: {
        type: 'doc',
        id: 'intro'
      },
      customProps: {
        icon: React.createElement(FaBook)
      },
      items: [
        // Tutorial Basics
        {
          type: 'category',
          label: 'Tutorial Basics',
          customProps: {
            icon: React.createElement(FaCode)
          },
          items: [
            'tutorial-basics/create-a-page',
            'tutorial-basics/create-a-document',
            'tutorial-basics/create-a-blog-post',
            'tutorial-basics/markdown-features',
            'tutorial-basics/deploy-your-site',
            'tutorial-basics/congratulations'
          ],
        },
        // Tutorial Extras
        {
          type: 'category',
          label: 'Tutorial Extras',
          customProps: {
            icon: React.createElement(FaLaptopCode)
          },
          items: [
            'tutorial-extras/manage-docs-versions',
            'tutorial-extras/translate-your-site'
          ],
        },
        // Herramientas
        {
          type: 'category',
          label: 'Herramientas',
          customProps: {
            icon: React.createElement(FaTools)
          },
          items: [
            'herramientas/herramienta-console',
            'herramientas/herramienta-network',
            'herramientas/herramienta-performance'
          ],
        },
        // Inspector
        {
          type: 'category',
          label: 'Inspector',
          customProps: {
            icon: React.createElement(FaSearch)
          },
          items: [
            'inspector/inspector-elementos',
            'inspector/funciones-basicas',
            'inspector/inspector-avanzado',
            'inspector/inspector-ejemplos'
          ],
        },
        // Manual de implementación
        {
          type: 'doc',
          id: 'manual-implementation',
          label: 'Manual de implementación',
          customProps: {
            icon: React.createElement(FaFileAlt)
          }
        },
      ],
    },
  ],
};

module.exports = sidebars;