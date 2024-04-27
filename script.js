// Get the navbar element
const navbar = document.querySelector(".nav");
console.log(navbar);

function toggleNavbarBox() {
  if (window.scrollY > 250) {
    navbar.classList.add("navbar-box");
  } else {
    navbar.classList.remove("navbar-box");
  }
}
window.addEventListener("scroll", toggleNavbarBox);

// Image-Slider
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const scrollAmount = 300;

  backBtn.addEventListener("click", function () {
    console.log("Prev button clicked");
    gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", function () {
    console.log("Next button clicked");
    gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  gallery.addEventListener("wheel", function (event) {
    event.preventDefault();
  });
});
