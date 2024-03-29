// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    // Disable image optimization because notion changes the images URLs frequently and that triggers a lot of
    // costly optimizations
    unoptimized: true,

    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  async redirects() {
    return [
      {
        source: '/blog/zero-to-nextjs-example-with-wsl2-in-w11',
        destination: '/zero-to-nextjs-example-with-wsl2-in-w11',
        permanent: true,
      },{
        source: '/blog/web-dev-in-windows-11',
        destination: '/zero-to-nextjs-example-with-wsl2-in-w11',
        permanent: true,
      },{
        source: '/clean-code-tips',
        destination: '/code-tips',
        permanent: true,
      },{
        source: '/talk/bFSnXNIsK4A',
        destination: '/',
        permanent: true,
      },
    ]
  },
})
