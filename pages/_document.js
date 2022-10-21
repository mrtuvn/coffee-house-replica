import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='vi'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='supported-color-schemes' content='dark light' />
          <meta name='color-scheme' content='dark light' />
          {/**
           * MEMO: inspired by https://web.dev/prefers-color-scheme/#activating-dark-mode-in-the-operating-system.
           * for now we take the approach https://github.com/GoogleChromeLabs/dark-mode-toggle#-using-a-css-class-that-you-toggle
           * as it's not supported in SSR environment.
           */}
          {/* <Script>
            {() => {
              // If `prefers-color-scheme` is not supported, fall back to light mode.
              // In this case, light.css will be downloaded with `highest` priority.
              if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
                document.documentElement.style.display = 'none';
                document.head.insertAdjacentHTML(
                  'beforeend',
                  '<link rel="stylesheet" href="/assets/css/light.css" onload="document.documentElement.style.display = \'\'">'
                );
              }
            }}
          </Script> */}
          {/* MEMO: inspired by https://web.dev/prefers-color-scheme/#loading-strategy */}
          {/*
            Conditionally either load the light or the dark stylesheet. The matching file
            will be downloaded with `highest`, the non-matching file with `lowest`
            priority. If the browser doesn't support `prefers-color-scheme`, the media
            query is unknown and the files are downloaded with `lowest` priority (but
            above I already force `highest` priority for my default light experience).
          */}
          {/* <link
            rel='stylesheet'
            href='/assets/css/dark.css'
            media='(prefers-color-scheme: dark)' />
          <link
            rel='stylesheet'
            href='/assets/css/light.css'
            media='(prefers-color-scheme: light)' /> */}

          {/* Primary Meta Tags */}
          <meta name='title' content='The Coffee House Delivery' />
          <meta name='description' content='The Coffee House Delivery' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://local.coffee.dev' />
          <meta property='og:title' content='The Coffee House Delivery' />
          <meta property='og:description' content='The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API' />
          <meta property='og:image' content='https://movies.zaps.dev/movies-meta-image.jpg' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />

          {/* Twitter */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://local.coffee.dev' />
          <meta property='twitter:title' content='The Coffee House Delivery' />
          <meta property='twitter:description' content='The Movies App is a non-trivial demo application built on top of the TMDB (The Movie Database) API' />
          <meta property='twitter:image' content='https://movies.zaps.dev/movies-meta-image.jpg' />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Head>
        <body className='main-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;