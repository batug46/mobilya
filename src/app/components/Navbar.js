'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeContext'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <nav>
                <div className="logo">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>LUXE</Link>
                </div>
                <div className="nav-links desktop-only">
                    <Link href="/#koleksiyon">Koleksiyon</Link>
                    <Link href="/#felsefe">Felsefe</Link>
                    <Link href="/hakkimizda">Hakkımızda</Link>
                    <Link href="/#iletisim">İletişim</Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? (
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M7.05 7.05l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                            </svg>
                        ) : (
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 118.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>

                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-links">
                    <Link href="/#koleksiyon" onClick={() => setIsMenuOpen(false)}>Koleksiyon</Link>
                    <Link href="/#felsefe" onClick={() => setIsMenuOpen(false)}>Felsefe</Link>
                    <Link href="/hakkimizda" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link>
                    <Link href="/#iletisim" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
                    <div className="mobile-menu-footer">
                        <p>LUXE Architectural Objects</p>
                        <p>© 2024 İstanbul</p>
                    </div>
                </div>
            </div>
        </>
    )
}
