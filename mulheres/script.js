// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Página carregada com sucesso! As mulheres Xakriabá são incríveis.');
});

window.addEventListener("scroll", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
