// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Handle both click and touch events for better mobile support
const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('touchend', (e) => {
    e.preventDefault();
    toggleMenu();
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => {
    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    };
    
    n.addEventListener('click', closeMenu);
    n.addEventListener('touchend', (e) => {
        e.preventDefault();
        closeMenu();
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
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

// Form Validation
const contactForm = document.querySelector('.contact-form');
const formGroups = document.querySelectorAll('.form-group');

// Remove existing error messages
function removeErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    formGroups.forEach(group => group.classList.remove('error'));
}

// Add error message
function addErrorMessage(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    element.parentNode.appendChild(errorDiv);
    element.parentNode.classList.add('error');
}

// Validate form
function validateForm() {
    removeErrorMessages();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Validate name
    if (!name.value.trim()) {
        addErrorMessage(name, 'Name is required');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        addErrorMessage(name, 'Name must be at least 2 characters');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        addErrorMessage(email, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        addErrorMessage(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
        addErrorMessage(message, 'Message is required');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        addErrorMessage(message, 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // Show success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Submit form to Netlify
        const formData = new FormData(this);
        
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Show success notification
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #2563eb, #3b82f6)';
            submitBtn.disabled = false;
        })
        .catch((error) => {
            console.error('Error:', error);
            showNotification('There was an error sending your message. Please try again.', 'error');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #2563eb, #3b82f6)';
            submitBtn.disabled = false;
        });
    }
});

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 300);
}

// Real-time validation
formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    if (input) {
        input.addEventListener('blur', () => {
            const name = input.name;
            const value = input.value.trim();
            
            // Remove existing error for this field
            const existingError = group.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
                group.classList.remove('error');
            }
            
            // Validate specific field
            if (name === 'name' && value && value.length < 2) {
                addErrorMessage(input, 'Name must be at least 2 characters');
            } else if (name === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    addErrorMessage(input, 'Please enter a valid email address');
                }
            } else if (name === 'message' && value && value.length < 10) {
                addErrorMessage(input, 'Message must be at least 10 characters');
            }
        });
    }
});

// Scroll Animation
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
    const elementsToAnimate = document.querySelectorAll('.feature-card, .step, .contact-form, .contact-info');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// CTA Button click handler with touch support
const ctaButton = document.querySelector('.cta-button');
const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

ctaButton.addEventListener('click', scrollToContact);
ctaButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    scrollToContact();
});

// Add touch-friendly improvements to all buttons
document.querySelectorAll('button').forEach(button => {
    // Add minimum touch target size
    button.style.minHeight = '44px';
    button.style.minWidth = '44px';
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGraphic = document.querySelector('.hero-graphic');
    
    if (heroGraphic) {
        const rate = scrolled * -0.5;
        heroGraphic.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment the following lines to add typing effect to hero title
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// } 
