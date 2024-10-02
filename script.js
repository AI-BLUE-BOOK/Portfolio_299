document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20, // Adjust this value for the desired gap between cards
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// leave me your info
document
  .getElementById("infoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form input values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (fullName === "" || email === "") {
      alert("Please fill in all required fields.");
      return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Log the form data to the console
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Show confirmation dialog
    const confirmation = confirm("Do you want to submit the form?");
    if (confirmation) {
      alert("Form submitted successfully!");
    } else {
      alert("Form submission canceled.");
    }
  });

////carousel
