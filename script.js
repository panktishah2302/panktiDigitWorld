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


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_rw7ol1c";
    const templateID = "template_l9qe1kq"

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your msg sent successfull")
            }
        ).catch(err => {
            console.log(err)
        })
}