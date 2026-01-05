'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function OturmaGrubu() {
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
        { id: 1, title: 'MODÜLER MONOLİT', price: '₺84,000', img: '/assets/sofa.png' },
        { id: 6, title: 'DALGALI FORM', price: '₺15,800', img: '/assets/armchair.png' },
        { id: 7, title: 'RİTMİK FORM', price: '₺18,900', img: '/assets/chair.png' },
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
                    <h1 className="reveal active" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>OTURMA GRUBU</h1>
                    <p className="reveal active" style={{ maxWidth: '600px', color: 'var(--text-secondary)', marginBottom: '5rem' }}>
                        Konforun en saf hali. Heykelsi formlar ve dokulu kumaşların birleşimiyle tasarlanan oturma ünitelerimiz, yaşam alanınızın merkezine sessiz bir otorite katar.
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
