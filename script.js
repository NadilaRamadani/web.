// ===== SMOOTH SCROLL UNTUK LINK INTERNAL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FORM SUBMISSION HANDLER =====
document.addEventListener('DOMContentLoaded', function() {
    // Handle semua form yang ada
    const items = document.querySelectorAll('.card');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim.');
            this.reset();
        });
    });
    
    // ===== LIKE BUTTON UNTUK HALAMAN CERITA =====
    const likeButtons = document.querySelectorAll('.bi-heart');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.color = '#fbbf24';
            alert('Anda menyukai cerita ini!');
        });
    });
    
    // ===== ACTIVE MENU HIGHLIGHT =====
    // Mendapatkan URL halaman saat ini
    const currentPage = window.location.pathname.split('/').pop();
    
    // Menandai menu yang aktif berdasarkan halaman
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Hapus class active dari semua link
        link.classList.remove('active');
        
        // Tambahkan class active ke link yang sesuai dengan halaman saat ini
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '/' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
        
        // Khusus untuk halaman utama (index.html)
        if (currentPage === '' || currentPage === '/' || currentPage === 'index.html') {
            if (linkPage === 'index.html') {
                link.classList.add('active');
            }
        }
    });
    
    // ===== RESPONSIVE MENU TOGGLE (UNTUK MOBILE) =====
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navbarToggler && navLinksContainer) {
        navbarToggler.addEventListener('click', function() {
            navLinksContainer.classList.toggle('show');
        });
    }
    
    // ===== SCROLL EFFECT UNTUK NAVBAR =====
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
            }
        });
    }
    
    // ===== VIDEO PLAYER HANDLER =====
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        if (video) {
            card.addEventListener('mouseenter', function() {
                video.setAttribute('controls', 'true');
            });
            
            card.addEventListener('mouseleave', function() {
                if (video.paused) {
                    video.removeAttribute('controls');
                }
            });
        }
    });
    
    // ===== GALLERY IMAGE CLICK HANDLER =====
    const galleryImages = document.querySelectorAll('.card img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const title = this.nextElementSibling?.querySelector('h3')?.textContent || 'Foto Lebaran';
            alert('Membuka foto: ' + title);
        });
    });
    
    // ===== KEGIATAN CARD HOVER EFFECT =====
    const kegiatanCards = document.querySelectorAll('.kegiatan-card');
    kegiatanCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== CERITA PAGE INTERACTIONS =====
    const ceritaCards = document.querySelectorAll('.cerita-card');
    ceritaCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('bi-heart') && !e.target.closest('.btn')) {
                const title = this.querySelector('h2')?.textContent || 'Cerita Lebaran';
                console.log('Membaca cerita: ' + title);
            }
        });
    });
    
    // ===== KONTAK FORM VALIDATION =====
    const kontakForm = document.querySelector('.kontak-card form');
    if (kontakForm) {
        const inputs = kontakForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#fbbf24';
            });
            input.addEventListener('blur', function() {
                this.style.borderColor = '#e2e8f0';
            });
        });
    }
    
    // ===== BACK TO TOP BUTTON (JIKA ADA) =====
    const backToTop = document.querySelector('#backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ===== LOG UNTUK DEBUG =====
    console.log('Website Lebaran Nadila Ramadani siap!');
    console.log('Halaman saat ini:', currentPage);
    console.log('Menu yang tersedia:', Array.from(navLinks).map(link => link.textContent));
});

// ===== FUNGSI UNTUK MEMUTAR VIDEO =====
function playVideo(videoId) {
    console.log('Memutar video:', videoId);
    alert('Video akan diputar: ' + videoId);
}

// ===== FUNGSI UNTUK FILTER GALERI (JIKA ADA) =====
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    if (!items.length) return;
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category) || 
            (category === 'all' && btn.textContent === 'Semua')) {
            btn.classList.add('active');
        }
    });
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===== FUNGSI UNTUK WHATSAPP BUTTON =====
function openWhatsApp(phone, message) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ===== FUNGSI UNTUK SHARE CERITA =====
function shareCerita(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).then(() => {
            console.log('Berhasil dibagikan');
        }).catch(console.error);
    } else {
        alert('Salin link: ' + url);
    }
}

// ===== FUNGSI UNTUK MENGHITUNG WAKTU =====
function updateCountdown() {
    const targetDate = new Date('April 10, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update elemen countdown jika ada
        document.getElementById('days') && (document.getElementById('days').textContent = String(days).padStart(2, '0'));
        document.getElementById('hours') && (document.getElementById('hours').textContent = String(hours).padStart(2, '0'));
        document.getElementById('minutes') && (document.getElementById('minutes').textContent = String(minutes).padStart(2, '0'));
        document.getElementById('seconds') && (document.getElementById('seconds').textContent = String(seconds).padStart(2, '0'));
    }
}

// Jalankan countdown setiap detik
setInterval(updateCountdown, 1000);