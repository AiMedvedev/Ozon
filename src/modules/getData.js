const getData = (str) => {
    return fetch(`https://ozon-test-c27b4-default-rtdb.firebaseio.com/goods.json`)
    .then(res => {
        return res.json();
    });
}

export default getData;