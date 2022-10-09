export default {
  github: 'https://github.com/MohammadTaseenKhan/hitchatter-docs',
  docsRepositoryBase: 'https://github.com/MohammadTaseenKhan/hitchatter-docs/blob/main',
  titleSuffix: ' – Chitchatter',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Chitchatter</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      Communication tool that is free, open source, and designed for simplicity and security
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Chitchatter: communication tool that is free, open source, and designed for simplicity and security" />
      <meta name="og:description" content="Chitchatter: communication tool that is free, open source, and designed for simplicity and security" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://chitchatter-docs.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="chitchatter-docs.vercel.app" />
      <meta name="twitter:url" content="https://chitchatter-docs.vercel.app/" />
      <meta name="og:title" content="Chitchatter: communication tool that is free, open source, and designed for simplicity and security" />
      <meta name="og:image" content="https://chitchatter-docs.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon.png"
      />
      <meta name="msapplication-TileImage" content="/favicon.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>GPL v2 {new Date().getFullYear()} © Chitchatter.</>,
  unstable_faviconGlyph: '👋',
}
