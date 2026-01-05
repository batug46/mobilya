import Link from 'next/link'

export default function Footer() {
    return (
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
                        <li style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.5 }}>Kariyer</li>
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
    )
}
