// Interactive functionality for the website

document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Newsletter subscription (basic validation)
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const subscribeButtons = document.querySelectorAll('button');
    
    subscribeButtons.forEach(button => {
        if (button.textContent.trim() === 'Subscribe') {
            button.addEventListener('click', function() {
                const emailInput = this.parentElement.querySelector('input[type="email"]');
                if (emailInput) {
                    const email = emailInput.value.trim();
                    if (email && isValidEmail(email)) {
                        alert('Thank you for subscribing! We\'ll keep you updated on the latest AI video generation insights.');
                        emailInput.value = '';
                    } else {
                        alert('Please enter a valid email address.');
                    }
                }
            });
        }
    });
    
    // Mobile navigation toggle (if needed in future)
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    navToggle.style.display = 'none';
    
    // Add mobile menu toggle for smaller screens
    window.addEventListener('resize', function() {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth < 768) {
            navToggle.style.display = 'block';
        } else {
            navToggle.style.display = 'none';
            if (navLinks) {
                navLinks.style.display = 'flex';
            }
        }
    });
    
    // Video lazy loading and error handling
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('error', function() {
            // Hide video if it fails to load
            this.style.display = 'none';
        });
        
        // Pause video when not in view (for performance)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        });
        
        observer.observe(video);
    });
    
    // Add loading states for buttons that navigate to external links
    const externalButtons = document.querySelectorAll('a[target="_blank"] button, a[href^="https://"] button');
    externalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
    
    // Add hover effects for cards
    const cards = document.querySelectorAll('.card, .step-card, .pricing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth reveal animation for elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .step-card, .pricing-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);