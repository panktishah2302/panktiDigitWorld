var typingEffect = new Typed(".typedText", {
    strings: ["Eager Learner",
        "Web Enthusiast",
        "Poetic Soul"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


const navMenuBtn = document.querySelector('.nav-menu-btn');
const navMenu = document.querySelector('.nav-menu');

navMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

function validateForm() {
    let isValid = true;

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset errors
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    // Validate name
    if (name.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    }

    // If form is valid, submit it
    if (isValid) {
        document.getElementById('contactForm').submit();
    }
}


