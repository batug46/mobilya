import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>LUXE</h4>
                    <p>Modern mimari ve zanaatı birleştiren, İstanbul merkezli bir tasarım stüdyosu.</p>
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
                        <li><a href="#">Projeler</a></li>
                        <li><a href="#">Sürdürülebilirlik</a></li>
                        <li><a href="#">Kariyer</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Sosyal</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">LUXE</div>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>© 2024 LUXE ARCHITECTURAL OBJECTS</p>
                </div>
            </div>
        </footer>
    )
}
