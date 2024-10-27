// JavaScript para controlar o formulário de pesquisa
document.querySelector(".search-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const searchForm = document.getElementById("search-form");
  searchForm.classList.toggle("active"); // Alterna a classe 'active' para mostrar ou esconder o formulário
});

const valorMinimoInput = document.getElementById('valor-minimo');
const valorMaximoInput = document.getElementById('valor-maximo');
const incrementMinBtn = document.getElementById('increment-min-btn');
const decrementMinBtn = document.getElementById('decrement-min-btn');
const incrementMaxBtn = document.getElementById('increment-max-btn');
const decrementMaxBtn = document.getElementById('decrement-max-btn');

incrementMinBtn.addEventListener('click', () => {
  valorMinimoInput.value = parseInt(valorMinimoInput.value) + 50000;
});

decrementMinBtn.addEventListener('click', () => {
  if (parseInt(valorMinimoInput.value) > parseInt(valorMinimoInput.min)) {
    valorMinimoInput.value = parseInt(valorMinimoInput.value) - 50000;
  }
});

incrementMaxBtn.addEventListener('click', () => {
  valorMaximoInput.value = parseInt(valorMaximoInput.value) + 50000;
});

decrementMaxBtn.addEventListener('click', () => {
  if (parseInt(valorMaximoInput.value) > parseInt(valorMaximoInput.min)) {
    valorMaximoInput.value = parseInt(valorMaximoInput.value) - 50000;
  }
});



