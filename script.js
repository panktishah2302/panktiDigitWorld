var typingEffect = new Typed(".typedText", {
    strings: ["Eager Learner",
        "Web Enthusiast",
        "Poetic Soul"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


function toggleMenu() {
    var menu = document.getElementById("myNavMenu");
    var barsIcon = document.querySelector(".fa-bars");
    var timesIcon = document.querySelector(".fa-times");

    menu.classList.toggle("show");
    barsIcon.style.display = barsIcon.style.display === "none" ? "inline-block" : "none";
    timesIcon.style.display = timesIcon.style.display === "none" ? "inline-block" : "none";
}



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
            console.error('Error sending email:', err);
            alert('Oops! Something went wrong. Please try again later.');
        });
}