import './globals.css'

export const metadata = {
  title: 'LUXE — Architectural Objects',
  description: 'Yaşam alanlarınızı mimari birer heykele dönüştüren, zamansız formlar.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
