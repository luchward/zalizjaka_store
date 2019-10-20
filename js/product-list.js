class ProductList {
  constructor(productsUrl, renderContainer, cart) {
    this.cart = cart;
    fetch(productsUrl)
      .then(result => result.json())
      .then(products => {
        this.products = products;
        this.renderProducts(renderContainer, products);
        this.addEventListeners();
        document
          .querySelector('#selectOrder')
          .addEventListener('change', event => {
            switch (event.target.value) {
              case 'increasePrice':
                products.sort((a, b) => a.price - b.price);
                break;
              case 'decreasePrice':
                products.sort((a, b) => b.price - a.price);
                break;
              case 'name':
                products.sort((a, b) =>
                  a.title.toUpperCase() > b.title.toUpperCase()
                    ? 1
                    : a.title.toUpperCase() < b.title.toUpperCase()
                    ? -1
                    : 0
                );
            }
            this.renderProducts(renderContainer, products);
          });
        document
          .querySelector('.filter')
          .addEventListener('keydown', () =>
            this.renderProducts(renderContainer, products)
          );
      });
  }
  getProductById(id) {
    return this.products.find(el => el.id === id);
  }
  renderProducts(container, products) {
    let productListDomString = '';
    products
      .filter(product =>
        product.title
          .toLowerCase()
          .includes(document.querySelector('.filter').value.toLowerCase())
      )
      .forEach(product => {
        productListDomString += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                  <div class="card product">
                    <image class="card-img-top" src="image/${product.image}"
                        alt="${product.title}">
                    <div class="card-body">
                      <h6 class="card-title">${product.title}</h6>

                      <button class="btn btn-info" data-toggle="modal"
                        data-target="#productInfoModal" data-id="${product.id}">Інфо
                      </button>
                      <button class="btn btn-primary buy" data-id="${product.id}">
                    ${product.price} грн - Купити
                      </button>
                    </div>
                  </div>
                </div>`; //<p class="card-text">${product.description}</p>
      });
    container.html(productListDomString);
  }
  addEventListeners() {
    $('#productInfoModal').on('show.bs.modal', event => {
      const button = $(event.relatedTarget); // Button that triggered the modal
      const id = String(button.data('id')); // Extract info from data-* attributes
      const product = this.getProductById(id);
      const modal = $('#productInfoModal');
      modal
        .find('.modal-body .card-img-top')
        .attr('src', 'image/' + product.image)
        .attr('alt', product.title);
      modal.find('.modal-body .card-title').text(product.title);
      modal.find('.modal-body .card-text').text(product.description);
      modal
        .find('button.buy')
        .text(`${product.price} - Купити`)
        .data('id', id);
    });
    $('.card.product button.buy, #productInfoModal button.buy').click(event => {
      const button = $(event.target);
      const id = button.data('id');
      this.cart.addProduct(id);
      window.showAlert('Товар доданий у кошик');
    });
  }
}
