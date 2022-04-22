import Layout from '../components/Layout';
import '../styles/globals.css';

import Script from 'next/script';





// using next-seo to add a title and meta, for better Search Engine results.
// Also helps add cards/banners for messages on WhatsApp or Twitter.
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <NextSeo 
        title="Spyke 🗿 Coming Soon"
        description="Spyke Social — Find your Klan!"
        openGraph={{
            url: 'https://spy.ke',
            title: 'Spyke 🗿 Coming Soon',
            description: 'Spyke Social — Find your Klan!',
            images: [
                { 
                    url: 'https://spy.ke/spyke-full.png',
                    alt: 'Spyke Social Private Limited',
                    type: 'image/png',
                }
            ],
            site_name: 'Spyke Home'
        }}
        twitter={{
            handle: '@spykesocial',
        }}
      />

      <Script 
        strategy='lazyOnload' 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>


      <Script strategy='lazyOnload' >
        {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`
        }

      </Script>


      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
