(function() {
    let stars = [{'id':1}, {'id':2},{'id':3},{'id': 4}, {'id':5}];

    function addEventListeners() {
        let ul = document.getElementById('ul-list');
        let listItems = document.getElementsByClassName('li-list');
            ul.addEventListener('click', (e) => {
                let elem = document.getElementById('style');
                let styles = window.getComputedStyle(e.target);
                let currentId = e.target.id;
                // add gold class to all li before this
                if(listItems) {
                    for(let list of listItems) {
                        if(list.id <= currentId) {
                            list.classList.remove('li-list_hover');
                            list.classList.add('star-selected');
                        } else {
                            list.classList.remove('star-selected');
                        }
                    }
                }
            })

            ul.addEventListener('mouseover', (e) => {
                let currentId = e.target.id;
                // add gold class to all li before this
                if(listItems) {
                    for(let list of listItems) {
                        if(list.id <= currentId) {
                            if(!list.classList.contains('star-selected'))
                            list.classList.add('li-list_hover');
                        } else {
                            list.classList.remove('li-list_hover');
                        }
                    }
                }
            });

            ul.addEventListener('mouseout', (e) => {
                let currentId = e.target.id;
                // add gold class to all li before this
                if(listItems) {
                    for(let list of listItems) {
                        list.classList.remove('li-list_hover');
                    }
                }
            })
    }

    function renderStars() {
        let html = stars.map((star) => {
            let li = document.createElement('li');
            li.classList.add('li-list');
            li.id = star.id;
            li.innerHTML = '&starf;';
            return li;
        })
        let ul = document.getElementById('ul-list');
    
        html.forEach((elem) => {
            ul.appendChild(elem);
        })

        addEventListeners();
    }
    renderStars();
})()