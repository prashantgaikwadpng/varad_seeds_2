/* ============================================================
   VARAD SEEDS — Home Page JavaScript (home.js)
   Only loaded on index.html
   ============================================================ */

// ==================== TESTIMONIAL SLIDER ====================
const testimonials = [
    {
        image: 'assets/images/site/testimonial-1.jpg',
        text: 'Varad Seeds has transformed my farming. The cotton yield increased by 35% compared to previous years. Their technical support team is always available to help. Highly recommended!',
        name: 'Ramesh Patil',
        role: 'Cotton Farmer, Maharashtra',
        rating: 5
    },
    {
        image: 'assets/images/site/testimonial-2.jpg',
        text: 'I have been using Varad tomato seeds for 3 years now. The disease resistance is excellent and the yield is consistently high. Best seeds in the market!',
        name: 'Suresh Kumar',
        role: 'Vegetable Farmer, Karnataka',
        rating: 5
    },
    {
        image: 'assets/images/site/testimonial-3.jpg',
        text: 'The soybean seeds from Varad have excellent germination rates. Their team provided great guidance on cultivation practices. Very satisfied with the results!',
        name: 'Priya Sharma',
        role: 'Soybean Farmer, Madhya Pradesh',
        rating: 4
    },
    {
        image: 'assets/images/site/testimonial-4.jpg',
        text: 'Outstanding quality and customer service! The hybrid sunflower seeds gave us 40% more yield. Will continue to buy from Varad Seeds.',
        name: 'Vikram Singh',
        role: 'Oil Seeds Farmer, Rajasthan',
        rating: 5
    }
];

let currentTestimonial = 0;
const testimonialCard = document.getElementById('testimonialCard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateTestimonial(index) {
    if (!testimonialCard) return;
    const t = testimonials[index];
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < t.rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    testimonialCard.innerHTML = `
        <img src="${t.image}" alt="${t.name}" class="testimonial-image" loading="lazy">
        <p>"${t.text}"</p>
        <h4>${t.name}</h4>
        <span>${t.role}</span>
        <div class="testimonial-rating">${stars}</div>
    `;
}

if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentTestimonial);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    });
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
}, 5000);

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }

    updateCounter();
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item h3');
            statItems.forEach(item => {
                const value = parseInt(item.textContent);
                if (!isNaN(value)) {
                    animateCounter(item, value);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ==================== GALLERY PAGINATION ====================
(function() {
    const IMAGES_PER_PAGE = 12;
    const galleryGrid = document.querySelector('.gallery-grid');
    const paginationContainer = document.querySelector('.gallery-pagination');

    if (!galleryGrid || !paginationContainer) return;

    const allItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
    const totalPages = Math.ceil(allItems.length / IMAGES_PER_PAGE);
    let currentPage = 1;

    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * IMAGES_PER_PAGE;
        const end = start + IMAGES_PER_PAGE;

        allItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = '';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, (index - start) * 50);
            } else {
                item.style.display = 'none';
            }
        });

        // Update pagination buttons
        paginationContainer.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
        });
    }

    function buildPagination() {
        paginationContainer.innerHTML = '';

        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) showPage(currentPage - 1);
        });
        paginationContainer.appendChild(prevBtn);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.dataset.page = i;
            if (i === 1) btn.classList.add('active');
            btn.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(btn);
        }

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) showPage(currentPage + 1);
        });
        paginationContainer.appendChild(nextBtn);
    }

    if (allItems.length > IMAGES_PER_PAGE) {
        buildPagination();
        showPage(1);
    }
})();

// ==================== GALLERY LIGHTBOX ====================
(function() {
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    const galleryLinks = document.querySelectorAll('.gallery-item a, .gallery-item img');
    let currentIndex = 0;
    let images = [];

    // Collect all gallery image sources
    document.querySelectorAll('.gallery-item img').forEach(img => {
        images.push(img.src);
    });

    // Open lightbox
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = index;
            lightboxImg.src = images[currentIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex];
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex];
        });
    }

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex];
        }
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex];
        }
    });
})();
