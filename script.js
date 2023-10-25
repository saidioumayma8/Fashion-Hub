const burgerMenu = document.querySelector(".burger-menu");
const navigationMenu = document.querySelector(".toto");

function showMenu() {
    navigationMenu.setAttribute('class', 'show-menu')
    burgerMenu.setAttribute('onclick', 'hideMenu()')
}

function hideMenu() {
    navigationMenu.setAttribute('class', 'toto')
    burgerMenu.setAttribute('onclick', 'showMenu()')
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var namePattern = /^[A-Za-z]+$/; // Match alphabetic characters only
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    var phonePattern = /^\d{10}$/; // Match a 10-digit phone number

    if (!namePattern.test(firstName)) {
        alert("Please enter a valid First Name.");
        e.preventDefault(); // Prevent form submission
    }

    if (!namePattern.test(lastName)) {
        alert("Please enter a valid Last Name.");
        e.preventDefault(); // Prevent form submission
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Email Address.");
        e.preventDefault(); // Prevent form submission
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid Phone Number (10 digits).");
        e.preventDefault(); // Prevent form submission
    }
});

