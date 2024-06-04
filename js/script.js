/* BACK TO TOP BUTTON */

// Get the button:
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 1;
  const totalSlides = 3;
  const changeSlideInterval = 180000; // 180 seconds
  const initialDelay = 20000; // 20 seconds

  function changeSlide() {
      currentSlide = (currentSlide % totalSlides) + 1;
      document.getElementById(`slide-${currentSlide}`).scrollIntoView({ behavior: 'smooth' });
  }

  // Initial delay
  setTimeout(() => {
      changeSlide();
      // Set interval after initial delay
      setInterval(changeSlide, changeSlideInterval);
  }, initialDelay);
});

// Account

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});