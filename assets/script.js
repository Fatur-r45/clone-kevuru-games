const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 250) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 400px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  navbar.classList.add("bg-dark");
}
