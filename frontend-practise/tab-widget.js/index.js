
//index,js
(function() {
    const state = {
        'tabSelected': 'English'
    }
    const data = {
        'English': 'Hello friend',
        'Spanish': 'Hola Amigo',
        'French': 'Bonjour Amor'
    }
    async function getData() {
        try {
            let response = await fetch('api-endpoint');
            if(response.ok) {
                return await response.json();
            } else {
                throw Error('error')
            }
        } catch(e) {
            throw Error('error',e)
        }
    }
    
    function render(data) {
        const html = `<div class='wrapper'>
            <div class="container">
            <button id="btn-1" data-type="English" class="btn">English</button>
            <button id="btn-2" data-type="Spanish" class="btn">Spanish</button>
            <button id="btn-3" data-type="French" class="btn">French</button>
            <div id="main-content" class="main-content"><p id="content-text" class="main-content_text">${data['English']}</p></div>
            </div>
        </div>
        `
        document.getElementById('tab-widget').innerHTML = html;
    }

    function changeContentText(type) {
        document.getElementById('content-text').innerHTML = data[type];
    }

    function changeButtonsClassToActive(id) {
        // remove active from other btns
        let btn = document.getElementsByClassName('active');
        if(btn.length) {
            for(let elem of btn) {
                elem.classList.remove('active');
            }
        }
        document.getElementById(id).classList.add('active');

    }

    function addEventListeners() {
        let container = document.querySelectorAll('.btn');
        container.forEach((element) => {
            element.addEventListener('click', (e) => {
                // change the text of the div based on the data type value
                let type = e.target.dataset['type'];
                let id = e.target.id;
                changeContentText(type);
                state.tabSelected = type;
                changeButtonsClassToActive(id);
            })
        })
    }
    render(data);
    addEventListeners();
    
})();