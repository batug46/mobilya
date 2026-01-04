// Luxe Architectural Objects - Custom Interaction Script

document.addEventListener('DOMContentLoaded', () => {

    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on index for staggered effect if multiple enter at once
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Modal Logic
    const modalHTML = `
        <div class="modal">
            <span class="modal-close">Kapat —</span>
            <div class="modal-content">
                <div class="modal-image">
                    <img src="" alt="">
                </div>
                <div class="modal-details">
                    <span class="section-tag">Detay</span>
                    <h2></h2>
                    <span class="price"></span>
                    <p>Bu özel parça, LUXE'un zamansız tasarım anlayışını ve en üst düzey zanaatkarlığı temsil eder. Her detay, mekanın ruhuyla diyalog kuracak şekilde titizlikle işlenmiştir.</p>
                    <button class="buy-btn" onclick="alert('Sipariş ve detaylı bilgi için bizimle iletişime geçin.')">İletişime Geç</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.querySelector('.modal');
    const modalImg = modal.querySelector('.modal-image img');
    const modalTitle = modal.querySelector('.modal-details h2');
    const modalPrice = modal.querySelector('.modal-details .price');
    const modalClose = modal.querySelector('.modal-close');

    document.querySelectorAll('.item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const img = item.querySelector('img').src;
            const title = item.querySelector('h3').innerText;
            const price = item.querySelector('.price').innerText;

            modalImg.src = img;
            modalTitle.innerText = title;
            modalPrice.innerText = price;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect on hero image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual img');
        if (heroVisual) {
            heroVisual.style.transform = `scale(1.1) translateY(${scrolled * 0.1}px)`;
        }
    });

    console.log('LUXE Architectural Objects - Experience Initialized');
});