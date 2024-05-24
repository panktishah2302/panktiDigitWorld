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




document.addEventListener("DOMContentLoaded", function () {
    var liveDemoBtn = document.getElementById("liveDemoBtn");
    var videoContainer = document.getElementById("videoContainer");

    liveDemoBtn.addEventListener("click", function (event) {
        event.preventDefault();

        videoContainer.style.display = "block";

        videoContainer.scrollIntoView({ behavior: "smooth" });
    });
});


function scrollToContact() {
    var contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Contact section not found.');
    }
}

function sendEmail() {
    Email.send({
        ServiceID: 'service_rw7ol1c',
        FromEmail: document.getElementById("email").value,
        To: 'spankto39@gmail.com',
        Subject: "Contact Info",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}
