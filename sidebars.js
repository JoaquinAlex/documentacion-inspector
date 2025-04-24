// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Inspector Web',
      items: [
        'inspector-web/abrir-inspector',
        'inspector-web/panel-elements',
        'inspector-web/panel-styles',
        'inspector-web/panel-console',
        'inspector-web/panel-network',
        'inspector-web/panel-application',
        'inspector-web/panel-sources',
        'inspector-web/panel-performance',
        'inspector-web/panel-memory',
        'inspector-web/panel-lighthouse',
        'inspector-web/consejos',
      ],
    },
  ],
};

export default sidebars;
