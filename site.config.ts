import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '9f7259c2c03f44e9b03b02a9847cf0bf',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Francisco Moretti',
  domain: 'franciscomoretti.com',
  author: 'Francisco Moretti',

  // open graph metadata (optional)
  description: 'Hi there! My name is Francisco Moretti. I talk about web development, good programming practices, and how to learn better.',

  // social usernames (optional)
  twitter: 'franmoretti_',
  github: 'FranciscoMoretti',
  linkedin: 'franciscomoretti',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  defaultPageCoverPosition: 0.75,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'd9de14b7dc154cd8aa5dcb9262e07bcd'
    },
    {
      title: 'Blog',
      pageId: '304a0518f6034977a59e10a5122aa261'
    },
    {
      title: 'Clean Code',
      pageId: '503052fcafa74652b442229350d410de'
    }
  ]
})
