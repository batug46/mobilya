'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Aydınlatma() {
    const [selectedProduct, setSelectedProduct] = useState(null)

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

    const products = [
        { id: 8, title: 'IŞIK HEYKELİ', price: '₺12,400', img: '/assets/lamp.png' },
    ]

    const openModal = (product) => {
        setSelectedProduct(product)
        document.body.style.overflow = 'hidden'
        window.history.pushState({ modal: true }, '', '#detay')
    }

    const closeModal = () => {
        setSelectedProduct(null)
        document.body.style.overflow = 'auto'
        if (window.location.hash === '#detay') window.history.back()
    }

    return (
        <>
            <nav>
                <div className="logo"><Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>LUXE</Link></div>
                <div className="nav-links">
                    <Link href="/#koleksiyon">Koleksiyon</Link>
                    <Link href="/#felsefe">Felsefe</Link>
                    <Link href="/hakkimizda">Hakkımızda</Link>
                    <Link href="/#iletisim">İletişim</Link>
                </div>
            </nav>

            <main>
                <section style={{ paddingTop: '15rem' }}>
                    <span className="section-tag reveal active">Katalog</span>
                    <h1 className="reveal active" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>AYDINLATMA</h1>
                    <p className="reveal active" style={{ maxWidth: '600px', color: 'var(--text-secondary)', marginBottom: '5rem' }}>
                        Işığın mimari formu. Mekanı sadece aydınlatmakla kalmayan, aynı zamanda birer heykel gibi konumlanan aydınlatma objelerimizle tanışın.
                    </p>

                    <div className="collection-grid">
                        {products.map((product) => (
                            <div key={product.id} className="item reveal active" onClick={() => openModal(product)}>
                                <div className="item-img-wrapper">
                                    <Image src={product.img} alt={product.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="item-info">
                                    <h3>{product.title}</h3>
                                    <span className="price">{product.price}</span>
                                </div>
                            </div>
                        ))}
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
                            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                            <li><Link href="/oturma-grubu">Oturma Grubu</Link></li>
                            <li><Link href="/yemek-odasi">Yemek Odası</Link></li>
                            <li><Link href="/aydinlatma">Aydınlatma</Link></li>
                            <li><Link href="/depolama">Depolama</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

            {selectedProduct && (
                <div className="modal active">
                    <span className="modal-close" onClick={closeModal}>Kapat —</span>
                    <div className="modal-content">
                        <div className="modal-image">
                            <Image src={selectedProduct.img} alt={selectedProduct.title} width={800} height={800} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="modal-details">
                            <span className="section-tag">Detay</span>
                            <h2>{selectedProduct.title}</h2>
                            <span className="price">{selectedProduct.price}</span>
                            <p>Özel tasarım LUXE objesi.</p>
                            <button className="buy-btn" onClick={() => alert('İletişime geçin.')}>İletişime Geç</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
