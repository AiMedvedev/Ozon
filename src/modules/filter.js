import getData from './getData';
import renderGoods from './renderGoods';
import {priceFilter, hotSaleFilter} from './filters';

const filter = () => {
    const filterDiv = document.querySelector('.filter-price');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const checkboxInnput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    filterDiv.addEventListener('input', (e) => {
        if (e.target === minInput) {
            getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInnput.checked), minInput.value, maxInput.value));
            });
        }
        if (e.target === maxInput) {
            getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInnput.checked), minInput.value, maxInput.value));
            });
        }
    });

    checkboxInnput.addEventListener('change', () => {
        if (checkboxInnput.checked) {
            checkboxSpan.classList.add('checked');
        } else {
            checkboxSpan.classList.remove('checked');
        }

        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInnput.checked), minInput.value, maxInput.value));
            });
    });
}

export default filter