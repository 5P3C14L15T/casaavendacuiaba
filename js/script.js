// JavaScript para controlar o formulário de pesquisa
document.querySelector(".search-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const searchForm = document.getElementById("search-form");
  searchForm.classList.toggle("active"); // Alterna a classe 'active' para mostrar ou esconder o formulário
});

const valorMinimoInput = document.getElementById("valor-minimo");
const valorMaximoInput = document.getElementById("valor-maximo");

valorMinimoInput.addEventListener("change", function () {
  const valorMinimo = parseInt(this.value);
  valorMaximoInput.min = valorMinimo + 50000; // O valor mínimo de "Valor Máximo" começa onde o "Valor Mínimo" termina
  valorMaximoInput.value = valorMinimo + 50000; // Define um valor padrão para "Valor Máximo"
});

