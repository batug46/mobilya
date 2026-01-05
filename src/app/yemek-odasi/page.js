'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function YemekOdasi() {
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
        { id: 2, title: 'MERMER DİYALOG', price: '₺42,500', img: '/assets/table.png' },
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
            <Navbar />

            <main>
                <section style={{ paddingTop: '15rem' }}>
                    <span className="section-tag reveal active">Katalog</span>
                    <h1 className="reveal active" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>YEMEK ODASI</h1>
                    <p className="reveal active" style={{ maxWidth: '600px', color: 'var(--text-secondary)', marginBottom: '5rem' }}>
                        Diyalogların merkez noktası. Doğal taş ve camın şeffaflığıyla şekillenen yemek masalarımız, minimalist estetiği fonksiyonellikle buluşturur.
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

            <Footer />

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
