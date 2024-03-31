const urlParams = new URLSearchParams(window.location.search);
const Id = urlParams.get('id');

fetch(`https://fakestoreapi.com/products/${Id}`)
  .then(resposta => resposta.json())
  .then(product => {
    const Detalhes = document.querySelector('.products');
    Detalhes.innerHTML = `
      <div class="product">
        <img src="${product.image}">
        <h1>${product.title}</h1>
        <p>${product.description}</p>
        <p>Categoria: ${product.category}</p>
      </div>    
    `;
  })