import './globals.css'
import { ThemeProvider } from './components/ThemeContext'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'LUXE — Architectural Objects',
  description: 'Yaşam alanlarınızı mimari birer heykele dönüştüren, zamansız formlar.',
  openGraph: {
    title: 'LUXE — Architectural Objects',
    description: 'Modern mimari ve zanaatı birleştiren, İstanbul merkezli bir tasarım stüdyosu.',
    url: 'https://mobilya-mu.vercel.app',
    siteName: 'LUXE',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LUXE Mobilya Koleksiyonu',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXE — Architectural Objects',
    description: 'Yaşam alanlarınızı mimari birer heykele dönüştüren, zamansız formlar.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
