const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 250) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};
