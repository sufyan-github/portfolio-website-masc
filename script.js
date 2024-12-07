document.getElementById('contact-btn').addEventListener('click', function () {
    document.querySelector('.form').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('get-in-touch-btn').addEventListener('click', function () {
    document.querySelector('.form').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.btn-icon').forEach(button => {
    button.addEventListener('click', function () {
        const url = this.dataset.url;
        window.open(url, '_blank');
    });
});

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Thank you for your message! We will get back to you soon.');
});

document.getElementById('privacy-link').addEventListener('click', function () {
    alert('Redirecting to the Privacy Policy section.');
    // Implement scrolling or redirection logic
});

document.getElementById('terms-link').addEventListener('click', function () {
    alert('Redirecting to the Terms of Service section.');
    // Implement scrolling or redirection logic
});

document.getElementById('cookies-link').addEventListener('click', function () {
    alert('Redirecting to the Cookies Settings section.');
    // Implement scrolling or redirection logic
});
