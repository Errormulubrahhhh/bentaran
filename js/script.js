// Initialize Feather Icons
if (window.feather) {
    feather.replace();
}

// Get random items from array
function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Generate merchandise card HTML
function generateMerchCard(item) {
    // Fix image path for home page (remove ../ if present since index.html is at root)
    const imagePath = item.image.replace('../', '');
    
    return `
    <div class="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <img src="${imagePath}" alt="${item.name}" class="w-full h-44 object-cover">
        <div class="p-4">
            <div class="flex flex-col gap-1 mb-2">
                <h3 class="text-white text-base font-semibold truncate">${item.name}</h3>
                <span class="bg-[#252525] text-white px-2 py-0.5 rounded-full text-xs w-fit">${item.category}</span>
            </div>
            <p class="text-gray-400 text-sm mb-3 line-clamp-2">${item.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-[#5d5d5d] text-lg font-bold">${item.price}</span>
                <a href="pages/merch-detail.html?id=${item.id}" class="bg-[#5d5d5d] text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-[#9a7349] transition duration-300">Detail</a>
            </div>
        </div>
    </div>
    `;
}

// Display random merchandise on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();

    // Display random merchandise
    const merchContainer = document.querySelector('#featured-merch');
    if (merchContainer) {
        // Get 4 random merchandise items
        const randomMerch = getRandomItems(merchandiseItems, 4);
        
        // Generate and display the cards
        merchContainer.innerHTML = randomMerch.map(item => generateMerchCard(item)).join('');
        
        // Reinitialize feather icons for any new elements
        feather.replace();
    }
});

// Load navbar component
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('navbar-container')) {
        ComponentLoader.loadComponent('navbar-container', 'components/navbar.html');
    }
});

// Extra scrolling + reveal behaviour for all pages
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero section
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    parallaxElements.forEach(el => {
                        const scrolled = window.pageYOffset;
                        const rate = scrolled * 0.4;
                        el.style.transform = `translate3d(0, ${rate}px, 0)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Smooth scrolling for same-page anchors (ensures behavior even if CSS unsupported)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return; // ignore empty anchors
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Reveal-on-scroll using IntersectionObserver
    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    if (revealEls.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(el => observer.observe(el));
    } else {
        // Fallback: reveal all immediately
        revealEls.forEach(el => el.classList.add('is-revealed'));
    }
});
