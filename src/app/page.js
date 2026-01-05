'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const products = [
    { id: 1, title: 'MODÜLER MONOLİT', price: '₺84,000', img: '/assets/sofa.png', category: 'Oturma Grubu' },
    { id: 2, title: 'MERMER DİYALOG', price: '₺42,500', img: '/assets/table.png', category: 'Yemek Odası' },
    { id: 3, title: 'ZEN PLATFORM', price: '₺36,000', img: '/assets/bed.png', category: 'Yatak Odası' },
    { id: 4, title: 'KAFES ÜNİTE', price: '₺28,900', img: '/assets/shelf.png', category: 'Depolama' },
    { id: 5, title: 'FLÜTED KABİNET', price: '₺31,200', img: '/assets/cabinet.png', category: 'Depolama' },
    { id: 6, title: 'DALGALI FORM', price: '₺15,800', img: '/assets/armchair.png', category: 'Oturma Grubu' },
    { id: 7, title: 'RİTMİK FORM', price: '₺18,900', img: '/assets/chair.png', category: 'Oturma Grubu' },
    { id: 8, title: 'IŞIK HEYKELİ', price: '₺12,400', img: '/assets/lamp.png', category: 'Aydınlatma' },
  ]

  const openModal = (product) => {
    setSelectedProduct(product)
    document.body.style.overflow = 'hidden'
    window.history.pushState({ modal: true }, '', '#detay')
  }

  const closeModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = 'auto'
    if (window.location.hash === '#detay') {
      window.history.back()
    }
  }

  useEffect(() => {
    const handlePopState = () => {
      if (selectedProduct) {
        setSelectedProduct(null)
        document.body.style.overflow = 'auto'
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [selectedProduct])

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-main">
            <span className="section-tag reveal">Artisan Series</span>
            <h1 className="reveal">SESSİZ<br />ZARAFET</h1>
            <p className="description reveal">
              Yaşam alanlarınızı mimari birer heykele dönüştüren, zamansız formlar.
              Her parça birer sanat objesi, her detay birer hikaye.
            </p>
            <a href="#koleksiyon" className="reveal" style={{ textDecoration: 'none', color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem', textTransform: 'uppercase' }}>Keşfet —</a>
          </div>
          <div className="hero-visual reveal">
            <Image
              src="/assets/chair.png"
              alt="Sculptural Chair"
              width={800}
              height={1000}
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Collection Section */}
        <section id="koleksiyon">
          <span className="section-tag reveal">Seçki 01</span>
          <div className="collection-grid">
            {products.map((product) => (
              <div key={product.id} className="item reveal" onClick={() => openModal(product)}>
                <div className="item-img-wrapper">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="item-info">
                  <h3>{product.title}</h3>
                  <span className="price">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="felsefe" style={{ background: 'var(--bg-primary)' }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag reveal">Vizyon</span>
            <h2 className="reveal" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>NESNELERİN RUHU</h2>
            <p className="reveal" style={{ fontSize: '1.5rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2rem' }}>
              Modernizm sadece bir akım değil, bir arınma sürecidir.
              LUXE, fazlalıklardan kurtulmuş, özüne odaklanmış ve bulunduğu mekana karakter katan objeler tasarlar.
            </p>
          </div>
        </section>

        {/* Video / About Section from Image */}
        <section id="hakkimizda" className="about-section">
          <div className="about-header">
            <div className="social-links">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">🔗</a>
            </div>
          </div>
          <div className="about-container">
            <div className="about-text reveal">
              <span className="section-tag">Hakkımızda</span>
              <h2>Tasarımda<br />Mükemmelik</h2>
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
              <Link href="/hakkimizda" className="buy-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>Daha Fazla Bilgi</Link>
            </div>

            <div className="video-column reveal">
              <div className="video-wrapper">
                <Image
                  src="/assets/sofa.png"
                  alt="Luxe Design Video"
                  width={800}
                  height={500}
                  style={{ objectFit: 'cover' }}
                />
                <div className="play-button"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim">
          <div className="contact-container">
            <div className="contact-text">
              <span className="section-tag reveal">İletişim</span>
              <h2 className="reveal" style={{ fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>BİRLİKTE<br />ÜRETELİM</h2>
              <p className="reveal" style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                Özel projeleriniz ve mimari danışmanlık talepleriniz için bize ulaşın.
                Showroom randevusu alarak koleksiyonumuzu yakından inceleyebilirsiniz.
              </p>
              <div className="reveal">
                <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Maslak, İstanbul</p>
                <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>+90 222 222 22 22</p>
                <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>ornek@mail.com</p>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={(e) => { e.preventDefault(); alert('Mesajınız başarıyla iletildi.'); }}>
              <div className="form-group">
                <label>İsim Soyisim</label>
                <input type="text" placeholder="Örn: Selin Yılmaz" />
              </div>
              <div className="form-group">
                <label>E-posta</label>
                <input type="email" placeholder="email@ornek.com" />
              </div>
              <div className="form-group">
                <label>Mesajınız</label>
                <textarea rows="4" placeholder="Projenizden bahsedin..."></textarea>
              </div>
              <button type="submit" className="submit-btn">Gönder</button>
            </form>
          </div>
        </section>

      </main>

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal active">
          <span className="modal-close" onClick={closeModal}>Kapat —</span>
          <div className="modal-content">
            <div className="modal-image">
              <Image
                src={selectedProduct.img}
                alt={selectedProduct.title}
                width={800}
                height={800}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="modal-details">
              <span className="section-tag">Detay</span>
              <h2>{selectedProduct.title}</h2>
              <span className="price">{selectedProduct.price}</span>
              <p>Bu özel parça, LUXE'un zamansız tasarım anlayışını ve en üst düzey zanaatkarlığı temsil eder. Her detay, mekanın ruhuyla diyalog kuracak şekilde titizlikle işlenmiştir.</p>
              <button className="buy-btn" onClick={() => alert('Sipariş ve detaylı bilgi için bizimle iletişime geçin.')}>İletişime Geç</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
