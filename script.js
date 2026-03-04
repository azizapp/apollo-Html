// Supabase Configuration
const SUPABASE_URL = 'https://isvhmsatlnwykmwukurh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_4lFHcw3ymRZBCN_tlmCE7Q_pW_qhaS1';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Basic interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    function closeMenu() {
        if (navLinks) navLinks.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');

        const toggleBtn = document.querySelector('.mobile-menu-toggle');
        const icon = toggleBtn ? toggleBtn.querySelector('i, svg') : null;
        if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            const isOpened = navLinks.classList.toggle('active');
            if (navOverlay) navOverlay.classList.toggle('active');

            const icon = mobileMenuToggle.querySelector('i, svg');
            if (icon) {
                icon.setAttribute('data-lucide', isOpened ? 'x' : 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });

        // Close menu when clicking overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', closeMenu);
        }

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Header Scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = 'none';
        }
    });

    // Product Data with real assets
    const products = [
        // Optic Frames
        {
            id: '1170-C02',
            type: 'optic',
            name: 'Optic Classic 1170',
            desc: 'Timeless design, lightweight build, and precision...',
            images: [
                'assets/Frames/OpticFrames/1170-C02/1170-C02.jpg',
                'assets/Frames/OpticFrames/1170-C02/1170-C02 2.jpg',
                'assets/Frames/OpticFrames/1170-C02/1170-C02 3.jpg'
            ]
        },
        {
            id: '1903-C01',
            type: 'optic',
            name: 'Optic Urban 1903',
            desc: 'Modern aesthetics with superior durability...',
            images: [
                'assets/Frames/OpticFrames/1903-C01/1903-C01.jpg',
                'assets/Frames/OpticFrames/1903-C01/1903-C01 2.jpg',
                'assets/Frames/OpticFrames/1903-C01/1903-C01 3.jpg'
            ]
        },
        {
            id: '1930-C03',
            type: 'optic',
            name: 'Optic Elite 1930',
            desc: 'Premium materials for the sophisticated professional...',
            images: [
                'assets/Frames/OpticFrames/1930-C03/1930-C03.jpg',
                'assets/Frames/OpticFrames/1930-C03/1930-C03 2.jpg',
                'assets/Frames/OpticFrames/1930-C03/1930-C03 3.jpg'
            ]
        },
        // Solar Glasses
        {
            id: '1929-C01',
            type: 'solar',
            name: 'Solar Peak 1929',
            desc: 'Advanced UV protection with a bold stylish edge...',
            images: [
                'assets/Frames/SolarGlasses/1929-C01/1929-C01.jpg',
                'assets/Frames/SolarGlasses/1929-C01/1929-C01 2.jpg',
                'assets/Frames/SolarGlasses/1929-C01/1929-C01 3.jpg'
            ]
        },
        {
            id: '1946-C02',
            type: 'solar',
            name: 'Solar Horizon 1946',
            desc: 'Perfect for outdoor lifestyle and modern trends...',
            images: [
                'assets/Frames/SolarGlasses/1946-C02/1946-C02.jpg',
                'assets/Frames/SolarGlasses/1946-C02/1946-C02 2.jpg',
                'assets/Frames/SolarGlasses/1946-C02/1946-C02 3.jpg'
            ]
        },
        {
            id: '1976-C02',
            type: 'solar',
            name: 'Solar Retro 1976',
            desc: 'Classic vintage feel with modern lens technology...',
            images: [
                'assets/Frames/SolarGlasses/1976-C02/1976-C02.jpg',
                'assets/Frames/SolarGlasses/1976-C02/1976-C02 2.jpg',
                'assets/Frames/SolarGlasses/1976-C02/1976-C02 3.jpg'
            ]
        },
        // Reading Glasses
        {
            id: '1907-C04',
            type: 'reading',
            name: 'Reader Focus 1907',
            desc: 'Ergonomic comfort for long hours of reading...',
            images: [
                'assets/Frames/ReadingGlasses/1907-C04/1907-C04.jpg',
                'assets/Frames/ReadingGlasses/1907-C04/1907-C04 2.jpg',
                'assets/Frames/ReadingGlasses/1907-C04/1907-C04 3.jpg'
            ]
        },
        {
            id: '1909-C04',
            type: 'reading',
            name: 'Reader Smart 1909',
            desc: 'Sleek and professional reading solutions...',
            images: [
                'assets/Frames/ReadingGlasses/1909-C04/1909-C04.jpg',
                'assets/Frames/ReadingGlasses/1909-C04/1909-C04 2.jpg',
                'assets/Frames/ReadingGlasses/1909-C04/1909-C04 3.jpg'
            ]
        },
        {
            id: '1914-C04',
            type: 'reading',
            name: 'Reader Pro 1914',
            desc: 'Ultimate clarity and lightweight frame design...',
            images: [
                'assets/Frames/ReadingGlasses/1914-C04/1914-C04.jpg',
                'assets/Frames/ReadingGlasses/1914-C04/1914-C04 2.jpg',
                'assets/Frames/ReadingGlasses/1914-C04/1914-C04 3.jpg'
            ]
        }
    ];

    const productContainer = document.getElementById('product-container');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function renderProducts(filter) {
        if (!productContainer) return;
        productContainer.innerHTML = '';

        const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.id = p.id;
            card.dataset.currentImg = 0;

            card.innerHTML = `
                <div class="product-visual">
                    <div class="product-img-container">
                        <img src="${p.images[0]}" alt="${p.name}" class="main-img">
                    </div>
                    <button class="buy-now-btn">Buy it now</button>
                </div>
                <div class="product-card-details">
                    <h3>${p.id}</h3>
                    <p>${p.desc}</p>
                </div>
            `;
            productContainer.appendChild(card);
        });
    }

    // Tab Switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.tab);
        });
    });

    // Automatic Sequential Image Transition
    setInterval(() => {
        const activeCards = document.querySelectorAll('.product-card');
        activeCards.forEach(card => {
            const id = card.dataset.id;
            const product = products.find(p => p.id === id);
            if (!product) return;

            let currentIdx = parseInt(card.dataset.currentImg);
            currentIdx = (currentIdx + 1) % product.images.length;
            card.dataset.currentImg = currentIdx;

            const img = card.querySelector('.main-img');
            if (img) {
                img.style.opacity = '0.3';
                setTimeout(() => {
                    img.src = product.images[currentIdx];
                    img.style.opacity = '1';
                }, 250);
            }
        });
    }, 3000);

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
                const icon = i.querySelector('i');
                if (icon) icon.setAttribute('data-lucide', 'plus');
            });

            // Open clicked item if it was not active
            if (!isActive) {
                item.classList.add('active');
                const icon = item.querySelector('i');
                if (icon) icon.setAttribute('data-lucide', 'minus');
            }

            // Re-render icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });

    // Registration Form Submission to Supabase
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;

            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';

            const formData = {
                company_name: document.getElementById('company_name').value,
                siren_vat_number: document.getElementById('siren_vat').value,
                contact_name: document.getElementById('contact_name').value,
                professional_email: document.getElementById('email').value,
                phone_number: document.getElementById('phone').value,
                country: document.getElementById('country').value,
                business_address: document.getElementById('address').value,
                receive_news: document.getElementById('news_offers').checked
            };

            try {
                const { data, error } = await supabaseClient
                    .from('registrations')
                    .insert([formData]);

                if (error) throw error;

                // Success
                alert('Success! Your request has been submitted.');
                contactForm.reset();
            } catch (error) {
                console.error('Error submitting to Supabase:', error);
                alert('Error: ' + error.message);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    // Initial Render
    renderProducts('optic');
});
