import './globals.css'
import { ThemeProvider } from './components/ThemeContext'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'LUXE — Architectural Objects',
  description: 'Yaşam alanlarınızı mimari birer heykele dönüştüren, zamansız formlar.',
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
