import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Providers } from './providers';
import SkipNavLink from '@/components/SkipNavLink';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Voyage de la langue française - Une expérience de récit défilant',
    template: '%s | Voyage de la langue française'
  },
  description: "Un voyage interactif à travers 2 000 ans d'histoire de la langue française, des soldats romains aux innovateurs africains",
  keywords: ['langue française', 'linguistique', 'histoire de la langue', 'évolution du français', 'apprentissage des langues', 'voyage interactif'],
  authors: [{ name: 'Équipe du voyage de la langue française' }],
  creator: 'Équipe du voyage de la langue française',
  publisher: 'Équipe du voyage de la langue française',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://french-language-journey.vercel.app',
    title: 'Voyage de la langue française - Une expérience de récit défilant',
    description: "Un voyage interactif à travers 2 000 ans d'histoire de la langue française, des soldats romains aux innovateurs africains",
    siteName: 'Voyage de la langue française',
    images: [
      {
        url: '/images/river.png',
        width: 1200,
        height: 630,
        alt: 'Visualisation du voyage de la langue française'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voyage de la langue française - Une expérience de récit défilant',
    description: "Un voyage interactif à travers 2 000 ans d'histoire de la langue française",
    images: ['/images/river.png'],
  },
  icons: {
    icon: '/images/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
    yandex: 'yandex-verification-token',
  },
};

const isProd = process.env.NODE_ENV === 'production';

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className="bg-background text-text font-body">
        <Providers>
          <SkipNavLink />
          <main id="main-content" tabIndex="-1" className="outline-none pt-16">
            {children}
          </main>
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (${isProd} && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(function(error) {
                      console.log('ServiceWorker registration failed: ', error);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
