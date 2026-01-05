'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Hakkimizda() {
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
            <Navbar />

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

            <Footer />
        </>
    )
}
