document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log('JavaScript is working!');

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
});