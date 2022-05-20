const renderGoods = (goodsItems) => {
    const goodsWrapper = document.querySelector('.goods');
    const cartCounter = document.querySelector('#cart span');
    let cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
    cartCounter.textContent = cartItems;
    
    localStorage.setItem('goods', JSON.stringify(goodsItems));
    
    goodsWrapper.innerHTML = '';

    goodsItems.forEach(item => {
        
        goodsWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card" data-key="${item.id}">
                ${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                <div class="card-img-wrapper">
                    <span class="card-img-top"
                        style="background-image: url('${item.img}')"></span>
                </div>
                <div class="card-body justify-content-between">
                    <div class="card-price">${item.price} ₽</div>
                    <h5 class="card-title">${item.title}</h5>
                    <button class="btn btn-primary">В корзину</button>
                </div>
            </div>
        </div>
        `);
    });
}

export default renderGoods;