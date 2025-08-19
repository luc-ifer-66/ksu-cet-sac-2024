document.addEventListener('DOMContentLoaded', function() {
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

// Mobile Navigation Toggle
function toggleNavigation() {
    navLinks.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    let closeIcon = navToggle.querySelector('.close-x');
    if (navLinks.classList.contains('active')) {
        // Hide hamburger spans
        spans.forEach(span => span.style.display = 'none');
        // Add X icon if not present
        if (!closeIcon) {
            closeIcon = document.createElement('i');
            closeIcon.className = 'fas fa-times close-x';
            closeIcon.style.fontSize = '2rem';
            closeIcon.style.color = 'var(--primary-color, #2463eb)';
            closeIcon.style.position = 'absolute';
            closeIcon.style.top = '0.5rem';
            closeIcon.style.right = '0';
            closeIcon.style.transform = 'none';
            closeIcon.style.margin = '8px 12px 0 0'; // Optional: add margin for spacing from edge
            navToggle.appendChild(closeIcon);
        } else {
            closeIcon.style.display = 'block';
        }
        // Show nav-labels (text) for all links
        document.querySelectorAll('.nav-links .nav-label').forEach(label => {
            label.style.display = 'inline';
            label.style.opacity = '1';
            label.style.position = 'static';
            label.style.pointerEvents = 'auto';
            label.style.transform = 'none';
        });
    } else {
        // Show hamburger spans
        spans.forEach(span => span.style.display = 'block');
        // Hide X icon
        if (closeIcon) closeIcon.style.display = 'none';
        // Hide nav-labels (text) for all links on desktop, but keep for mobile
        if (window.innerWidth <= 1000) {
            document.querySelectorAll('.nav-links .nav-label').forEach(label => {
                label.style.display = 'inline';
                label.style.opacity = '1';
                label.style.position = 'static';
                label.style.pointerEvents = 'auto';
                label.style.transform = 'none';
            });
        } else {
            document.querySelectorAll('.nav-links .nav-label').forEach(label => {
                label.style.display = '';
                label.style.opacity = '';
                label.style.position = '';
                label.style.pointerEvents = '';
                label.style.transform = '';
            });
        }
    }
}

    navToggle.addEventListener('click', toggleNavigation);

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

// Entry Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('entryModal');
    const closeBtn = modal.querySelector('.modal-close');
    
    function closeModal() {
        if (modal) {
            modal.remove(); // Completely remove the modal from DOM
        }
    }
    
    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
});
