import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>
        <meta rel="theme-color" content='#fff' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
