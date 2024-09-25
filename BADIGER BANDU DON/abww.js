document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', () => {
        alert('Thank you for your interest! More details coming soon.');
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
});