export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    }) ;
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    }) ;
}

export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if (min === '' && max === '') {
            return goodsItem;
        }
        if (min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max;
        }
        if (min !== '' && max === '') {
            return goodsItem.price > +min;
        }
        if (min === '' && max !== '') {
            return goodsItem.price < +max;
        }
    }) ;
}

export const hotSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if (value) {
            return goodsItem.sale === true;
        } else {
            return goodsItem;
        }
        
    }) ;
}