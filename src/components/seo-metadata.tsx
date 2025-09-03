import Head from "next/head";

export default function SeoMetadata() {
  return (
    <Head>
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Motion Provider is a performance-first motion engine for React. Build delightful animations with clean APIs, optimized rendering, and developer-first tools."
      />
      <meta
        property="og:title"
        content="Motion Provider — Performance-First Motion Engine"
      />
      <meta
        property="og:description"
        content="Build delightful React animations with Motion Provider. Performance-first rendering, intuitive APIs, and seamless developer experience."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://motionprovider.dev/assets/screenshots/motion-provider-desktop-screenshot.png"
      />
      <meta property="og:url" content="https://motionprovider.dev" />
      <meta property="og:site_name" content="motionprovider.dev" />
      <meta name="msapplication-TileColor" content="#0b1220" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
