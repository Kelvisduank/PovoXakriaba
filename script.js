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