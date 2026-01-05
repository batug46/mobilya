'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hakkimizda() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const observerOptions = { threshold: 0.1 }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('active')
            })
        }, observerOptions)

        const revealElements = document.querySelectorAll('.reveal')
        revealElements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

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
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-links">
                    <Link href="/#koleksiyon" onClick={() => setIsMenuOpen(false)}>Koleksiyon</Link>
                    <Link href="/#felsefe" onClick={() => setIsMenuOpen(false)}>Felsefe</Link>
                    <Link href="/hakkimizda" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link>
                    <Link href="/#iletisim" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
                </div>
            </div>

            <main style={{ paddingTop: '10rem' }}>
                <section className="about-section">
                    <div className="about-container">
                        <div className="about-text reveal">
                            <span className="section-tag">Hakkımızda</span>
                            <h2>TASARIMDA<br />MÜKEMMELLİK</h2>
                            <p className="description">
                                25 yıllık deneyimimizle, modern yaşamın ihtiyaçlarını karşılayan, estetik ve fonksiyonel mobilyalar üretiyoruz.
                                Her parça, yaşam alanlarınızı daha konforlu ve şık hale getirmek için özenle tasarlanır.
                            </p>

                            <div className="stats-grid">
                                <div className="stat-item">
                                    <h3>1000+</h3>
                                    <p>Mutlu Müşteri</p>
                                </div>
                                <div className="stat-item">
                                    <h3>50+</h3>
                                    <p>Özgün Tasarım</p>
                                </div>
                                <div className="stat-item">
                                    <h3>25+</h3>
                                    <p>Yıllık Deneyim</p>
                                </div>
                            </div>
                        </div>

                        <div className="video-column reveal">
                            <div className="video-wrapper">
                                <Image
                                    src="/assets/sofa.png"
                                    alt="Luxe Design Studio"
                                    width={800}
                                    height={500}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="play-button"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ background: 'var(--bg-primary)' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <span className="section-tag reveal">Hikayemiz</span>
                        <h2 className="reveal" style={{ fontSize: '3rem', marginBottom: '2rem' }}>ZANAAT VE TEKNOLOJİ</h2>
                        <p className="reveal" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                            LUXE, bir mobilya markasından daha fazlasıdır. Biz, mekanı bir heykel gibi işleyen, her detayda mükemmelliği arayan bir tasarım stüdyosuyuz.
                            İstanbul'daki atölyelerimizde, geleneksel zanaat yöntemlerini modern üretim teknolojileriyle harmanlıyoruz.
                        </p>
                        <p className="reveal" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            Kullandığımız her malzeme özenle seçilir; sürdürülebilir ormanlardan elde edilen masif ağaçlar, İtalya'nın en iyi ocaklarından gelen mermerler
                            ve uzun ömürlü tekstiller. Amacımız sadece evinizi döşemek değil, nesilden nesile aktarılacak bir miras bırakmaktır.
                        </p>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>LUXE</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.5, lineHeight: 1.8 }}>Modern mimari ve zanaatı birleştiren, İstanbul merkezli bir tasarım stüdyosu.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Katalog</h4>
                        <ul>
                            <li><Link href="/oturma-grubu">Oturma Grubu</Link></li>
                            <li><Link href="/yemek-odasi">Yemek Odası</Link></li>
                            <li><Link href="/aydinlatma">Aydınlatma</Link></li>
                            <li><Link href="/depolama">Depolama</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Kurumsal</h4>
                        <ul>
                            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.5 }}>Projeler</li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.5 }}>Sürdürülebilirlik</li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.5 }}>İletişim</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Sosyal</h4>
                        <ul>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.5 }}>Instagram</li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.5 }}>Pinterest</li>
                            <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.5 }}>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-logo">LUXE</div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>© 2024 LUXE ARCHITECTURAL OBJECTS</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
