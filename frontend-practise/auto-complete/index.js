(function() {
    var trie = new Trie();

    var addName = document.querySelector('#enterName');
    var addButton = document.querySelector('#addButton');

    addButton.addEventListener('click', () => {
        trie.insert(addName.value);
        addName.value = '';
    })


    var input = document.querySelector('#nameInput');
    var ul = document.querySelector('#nameList');
    input.addEventListener('keyup', (e) => {
        var text = e.target.value;
        var suggestions = trie.allWordsWithThisPrefix(text);
        ul.innerHTML = '';
        suggestions.forEach(elem => {
            var li = document.createElement('li');
            li.innerText = elem;
            ul.appendChild(li);
        } )
    })
})()