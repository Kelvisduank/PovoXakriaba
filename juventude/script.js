// Carrossel
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselImages = document.querySelector('.carousel-images');

let position = 0;

prevBtn.addEventListener('click', () => {
    position = (position === 0) ? -600 : position + 300;
    carouselImages.style.transform = `translateX(${position}px)`;
});

nextBtn.addEventListener('click', () => {
    position = (position === -600) ? 0 : position - 300;
    carouselImages.style.transform = `translateX(${position}px)`;
});

// Gráfico
const ctx = document.getElementById('conquistas-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Educação', 'Arte', 'Política', 'Ambiente'],
        datasets: [{
            label: 'Conquistas',
            data: [15, 20, 10, 25],
            backgroundColor: ['#8b0000', '#b22222', '#dc143c', '#ff6347']
        }]
    },
    options: { responsive: true }
});
const menuHTML = `

<nav>
    <ul>
    <ol class="nav-bar">
            <a href="index.html"><li class="nav">Home</li></a>
           <a href="contato/contato.html"> <li class="nav">Contato</li></a>
          <a href="https://www.vakinha.com.br/3779320">  <li class="nav">Apoio</li></a>
            <a href="sobre/sobre.html"><li class="nav">Sobre</li></a>
        </ol>
    </ul>
</nav>
`;

//Inserir o menu na página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-container").innerHTML = menuHTML;
});


const menuHTML1 = `

<nav class="menu">
  <input
    id="menu-open"
    name="menu-open"
    class="menu-open"
    href="#"
    type="checkbox"
  />
  <label for="menu-open" class="menu-open-button">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>

  <a class="menu-item blue" href="#"> <i class="fa fa-anchor"></i> </a>
  <a class="menu-item green" href="#"> <i class="fa fa-coffee"></i> </a>
  <a class="menu-item red" href="#"> <i class="fa fa-heart"></i> </a>
  <a class="menu-item purple" href="#"> <i class="fa fa-microphone"></i> </a>
  <a class="menu-item orange" href="#"> <i class="fa fa-star"></i> </a>
  <a class="menu-item lightblue" href="#"> <i class="fa fa-diamond"></i> </a>
</nav>`;


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-mobile").innerHTML = menuHTML1;
});


 // Função para abrir o modal
 function openModal() {
  document.getElementById('modal').classList.add('active');
}

// Função para fechar o modal
function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

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

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

