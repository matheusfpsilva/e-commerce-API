fetch('https://fakestoreapi.com/products')
  .then(resposta => resposta.json())
  .then(data => {
    data.forEach(product => {
      let itemProduto = `
            <a href="detalhes.html?id=${product.id}">
                <div class="product">
                    <img src="${product.image}" alt="${product.title}">
                    <h1>${product.title}</h1>
                    <p>Avaliação: ${product.rating.rate}</p>
                    <p>Preço: $${product.price}</p>
                </div>
            </a>
          `;
      document.querySelector('.products').innerHTML += itemProduto;
    });
  });