const navbar = document.querySelector(".navbar");
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 400px)");
window.onscroll = () => {
  if (window.scrollY > 250) {
    navbar.classList.add("bg-dark");
  } else {
    if (mediaQuery.matches) {
      // Then trigger an alert
      navbar.classList.add("bg-dark");
    }
    navbar.classList.remove("bg-dark");
  }
};

// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  navbar.classList.add("bg-dark");
}
