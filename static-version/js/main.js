// Main JavaScript for Static Version
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initContactForm();
    initSmoothScrolling();
    initAnimations();
    initWhatsAppButton();
    initFilterSystem();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Mobile menu close on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // Active navigation highlighting
    highlightActiveNavLink();
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmission();
        });
    }
}

// Handle contact form submission
function handleContactFormSubmission() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }, 2000);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize filter functionality
function initFilterSystem() {
    const filterButtons = document.querySelectorAll('.secondary-nav-link');
    const hostelCards = document.querySelectorAll('.hostel-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-nav');
            
            // Apply filter
            applyFilter(filterValue, hostelCards);
        });
    });
}

// Apply filter to hostel cards
function applyFilter(filterValue, hostelCards) {
    hostelCards.forEach(card => {
        const cardData = getCardData(card);
        let shouldShow = false;
        
        switch(filterValue) {
            case 'search-all':
                shouldShow = true;
                break;
            case 'international':
                shouldShow = cardData.type === 'international';
                break;
            case 'local':
                shouldShow = cardData.type === 'local';
                break;
            case 'hotel':
                shouldShow = cardData.category === 'hotel';
                break;
            case 'lodges':
                shouldShow = cardData.category === 'lodges';
                break;
            case 'promo':
                shouldShow = cardData.hasPromo === true;
                break;
            default:
                shouldShow = true;
        }
        
        // Show/hide card with animation
        if (shouldShow) {
            card.style.display = 'block';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 50);
        } else {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Get data from hostel card for filtering
function getCardData(card) {
    // Extract data from card attributes or content
    const title = card.querySelector('.hostel-title')?.textContent || '';
    const badge = card.querySelector('.hostel-badge')?.textContent || '';
    const location = card.querySelector('.badge')?.textContent || '';
    
    // Determine type and category based on content
    let type = 'local';
    let category = 'hotel';
    let hasPromo = false;
    
    // Check for international indicators
    if (title.toLowerCase().includes('international') || location.toLowerCase().includes('international')) {
        type = 'international';
    }
    
    // Check for lodge indicators
    if (title.toLowerCase().includes('lodge') || title.toLowerCase().includes('camp') || badge.toLowerCase().includes('lodge')) {
        category = 'lodges';
    }
    
    // Check for promo indicators
    if (badge.toLowerCase().includes('promo') || badge.toLowerCase().includes('discount') || badge.toLowerCase().includes('offer')) {
        hasPromo = true;
    }
    
    return { type, category, hasPromo };
}

// Initialize animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.hostel-card, .feature-card, .service-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// WhatsApp button functionality
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-button a');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Add click tracking if needed
            console.log('WhatsApp button clicked');
        });
    }
}

// Highlight active navigation link
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images have data-src attributes
if (document.querySelectorAll('img[data-src]').length > 0) {
    initLazyLoading();
}
