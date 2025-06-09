// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

// Mobile Navigation Toggle
function toggleNavigation() {
    navLinks.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close mobile navigation when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navLinks.contains(event.target) || navToggle.contains(event.target);
    if (!isClickInsideNav && navLinks.classList.contains('active')) {
        toggleNavigation();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile navigation if open
            if (navLinks.classList.contains('active')) {
                toggleNavigation();
            }
        }
    });
});

// Event Listeners
navToggle.addEventListener('click', toggleNavigation);

// --- Search Functionality ---
const searchInput = document.getElementById('searchInput');
const serviceGrid = document.getElementById('serviceGrid');
const serviceCards = serviceGrid ? Array.from(serviceGrid.getElementsByClassName('service-card')) : [];
if (searchInput && serviceCards.length) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        serviceCards.forEach(card => {
            const title = card.getAttribute('data-title')?.toLowerCase() || '';
            const text = card.textContent.toLowerCase();
            if (title.includes(query) || text.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// --- Progress Bar Demo (for multi-step or loading) ---
const progressBar = document.getElementById('progress-bar');
function animateProgressBar() {
    if (!progressBar) return;
    progressBar.style.width = '0';
    setTimeout(() => {
        progressBar.style.width = '100%';
        setTimeout(() => {
            progressBar.style.width = '0';
        }, 1200);
    }, 300);
}
// Example: animate on page load
window.addEventListener('DOMContentLoaded', animateProgressBar);

// --- Quick Toolbar (optional: add tooltip on hover) ---
const toolbar = document.querySelector('.quick-toolbar');
if (toolbar) {
    toolbar.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            btn.setAttribute('data-show', '1');
        });
        btn.addEventListener('mouseleave', function() {
            btn.removeAttribute('data-show');
        });
    });
}
