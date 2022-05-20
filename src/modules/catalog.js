import getData from './getData';
import renderGoods from './renderGoods';
import {categoryFilter} from './filters';

const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');

    let isOpen = false;

    catalogBtn.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            catalogModal.style.display = 'block';
        } else {
            catalogModal.style.display = 'none';
        }
    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;
            
            getData().then((data) => {
            renderGoods(categoryFilter(data, text));
            });
        });
    });
}

export default catalog