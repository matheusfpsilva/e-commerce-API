function pesquisar() {
    const Procurar = document.getElementById('procurar');
    const procurarTexto = Procurar.value.trim().toLowerCase();

    fetch('https://fakestoreapi.com/products')
      .then(resposta => resposta.json())
      .then(data => {
        const filtrarProdutos = data.filter(product =>
          product.title.toLowerCase().includes(procurarTexto)
        );

        document.querySelector('.products').innerHTML = '';

        filtrarProdutos.forEach(product => {
          let itemProduto = `
            <a href="detalhes.html?id=${product.id}">
              <div class="product">
                <img src="${product.image}">
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <p>Avaliação: ${product.rating.rate}</p>
                <p>Categoria: ${product.category}</p>
                <p>Preço: $${product.price}</p>
              </div>
            </a>
          `;
          document.querySelector('.products').innerHTML += itemProduto;
        });
      })
}