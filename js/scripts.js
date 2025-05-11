document.addEventListener("DOMContentLoaded", () => {

    // 1. Smooth Scroll for Navigation Links
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default for anchor links within the page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60,  // Offset for fixed nav
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Active Navigation Link Highlighting
    window.addEventListener('scroll', () => {
        let currentPosition = window.scrollY + 70;  // Adjust for header offset
        let sections = document.querySelectorAll('section[id]');
        let navLinks = document.querySelectorAll('nav a');

        sections.forEach(section => {
            if (currentPosition >= section.offsetTop && 
                currentPosition < (section.offsetTop + section.offsetHeight)) {
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Find the corresponding link and add active class
                const id = section.getAttribute('id');
                const correspondingLink = document.querySelector(`nav a[href="#${id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // 3. Newsletter Form Validation
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            alert('Thank you for subscribing!');
            emailInput.value = ''; // Clear the input after successful subscription
        });
    }

    // 4. Check if user is logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        // You could add a welcome message or update UI for logged-in users
        console.log("User logged in:", user.name);
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
