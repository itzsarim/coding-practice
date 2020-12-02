(function() {
    const products = ['electornics', 'appliance', 'home', 'grocery', 'toilet'];

    function createOptions() {
        let datalist = document.getElementById('product');
        let optionsElemArray = products.map((product) => {
            let optionelem = document.createElement('option'); 
            optionelem.value = product;
            return optionelem;
        });
        optionsElemArray.forEach((elem) => {
            datalist.appendChild(elem);
        })
    }
    createOptions();
})()