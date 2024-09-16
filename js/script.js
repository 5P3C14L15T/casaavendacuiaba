// JavaScript para controlar o formulário de pesquisa
document.querySelector('.search-icon').addEventListener('click', function (e) {
    e.preventDefault();
    const searchForm = document.getElementById('search-form');
    searchForm.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou esconder o formulário
  });
  