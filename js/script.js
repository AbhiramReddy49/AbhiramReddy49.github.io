// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.section-header, .about-content, .timeline-item, .education-card, .skill-category, .project-card, .certification-card, .contact-item');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Scroll animations
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, scrollObserverOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => scrollObserver.observe(el));
});

// Professional About Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const aboutContent = document.querySelector('.about-content');
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    
    // Set up intersection observer for About section
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the main content container
                entry.target.classList.add('animate');
                
                // Animate paragraphs with staggered delay
                aboutParagraphs.forEach((p, index) => {
                    setTimeout(() => {
                        p.classList.add('animate');
                    }, 800 + (index * 200));
                });
                
                // Only trigger once
                aboutObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    if (aboutContent) {
        aboutObserver.observe(aboutContent);
    }
    
    // Observe other animated elements (excluding About section)
    const otherAnimatedElements = document.querySelectorAll('.fade-in:not(.about *), .slide-in-left:not(.about *), .slide-in-right:not(.about *), .scale-in:not(.about *)');
    otherAnimatedElements.forEach(el => observer.observe(el));
});

// Skill bar animations
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const width = bar.style.width;
            bar.style.setProperty('--progress-width', width);
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalHTML = heroTitle.innerHTML;
    const textContent = heroTitle.textContent; // Get just the text without HTML
    heroTitle.innerHTML = 'Hello, I\'m <span class="highlight"></span>';
    
    const highlightSpan = heroTitle.querySelector('.highlight');
    const nameText = 'Abhiram Reddy';
    
    let i = 0;
    const typeWriter = () => {
        if (i < nameText.length) {
            highlightSpan.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form animation (if you add a form later)
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Add smooth reveal animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Add counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when element is visible
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            updateCounter();
        }
    });
};

// Run counter animation on scroll
let countersAnimated = false;
window.addEventListener('scroll', () => {
    if (!countersAnimated) {
        const statsSection = document.querySelector('.about-stats');
        if (statsSection) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateCounters();
                countersAnimated = true;
            }
        }
    }
});

// Add download tracking for resume
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('Resume downloaded');
    });
});

// Add copy to clipboard functionality for email
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.href.replace('mailto:', '');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show success message
                showNotification('Email copied to clipboard!');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Email copied to clipboard!');
        }
        
        // Still open email client after a delay
        setTimeout(() => {
            window.location.href = link.href;
        }, 1000);
    });
});

// Notification system
const showNotification = (message) => {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
};

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Portfolio loaded successfully!');
    
    // Preload images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
});

// Add subtle parallax scrolling effect to the About section
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutSection && aboutContent) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.1;
            
            // Subtle parallax effect on background elements
            aboutSection.style.transform = `translateY(${parallax}px)`;
        }
    }
});
