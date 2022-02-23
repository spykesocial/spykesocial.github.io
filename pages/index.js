import Logo from '../components/Logo';

// using next-seo to add a title and meta, for better Search Engine results.
// Also helps add cards/banners for messages on WhatsApp or Twitter.
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo 
        title="Spyke 🗿 Coming Soon"
        description="Spyke Social ‒ Find your Klan!⁂"
        openGraph={{
            url: 'https://spy.ke',
            title: 'Spyke 🗿 Coming Soon',
            description: 'Spyke Social ‒ Find your Klan!⁂',
            images: [
                { 
                    url: 'https://spy.ke/spyke.png',
                    alt: 'Spyke Social Private Limited',
                    type: 'image/png',
                }
            ],
            site_name: 'Spyke 🗿 Home'
        }}
        twitter={{
            handle: '@spykesocial',
        }}
      />

      { /* body of page starts here... */ }
      <Logo/>
    </>
  );
}
