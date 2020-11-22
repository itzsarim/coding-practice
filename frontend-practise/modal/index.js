(function() {
    let renderHTML = async function() {
        let data = await fetchData();
        let modal = getHtml(data);
        document.body.insertAdjacentHTML('afterbegin', modal);
        let close = document.querySelector('#modalClose');
        let wrapper = document.getElementById('modalWrapper');
        let container = document.getElementById('modalContainer');
        close.addEventListener('click', () => {
           wrapper.style.display = 'none';
        })
        wrapper.addEventListener('click', () => {
            wrapper.style.display = 'none';
        })
        container.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }

    let addListeners = function() {
        let wrapper = document.getElementById('modalWrapper');
        document.getElementById('openModal').addEventListener('click', async () => {
           if(wrapper) {
                wrapper.style.display = flex;
           } else {
                await renderHTML(); // happens only first time
           }
        });
    }

    let fetchData = async function() {
        try {
            let response = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
            return response.json();
        } catch(err) {
            console.log(err);
        }
    }

    let getHtml = function(data) {
        return (`<div id="modalWrapper" class="modal-wrapper"><div id='modalContainer' class='modal-container'>
        <div class='modal-head'>
            <button class='modal-close' id='modalClose'>X</button>
            ${data[0].substring(0, 20)}
        </div>
        <div class='modal-body'>${data[1]}</div>
        <div class='modal-footer'>${data[2].substring(0,20)}</div>
        </div></div>`);
    }
    addListeners();
})()