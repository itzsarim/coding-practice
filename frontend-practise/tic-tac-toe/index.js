(function(w) {
    let boardElem = document.getElementById('board');
    const board = Array(w._mazeSize).fill().map(() => Array(w._mazeSize).fill('-1'));
    let lastMove = '-1';
    let renderHtml = function(size) {
        // renders divs with button size X size
        for(let i=0; i<size; i++) {
            for(let j=0; j<size; j++) {
                let square = document.createElement('div');
                square.className = 'square';
                boardElem.appendChild(square);
                let buttonX = document.createElement('button');
                buttonX.id = `btn${i}${j}X`;
                buttonX.dataset['pos'] = `${i}${j}X`;
                buttonX.innerText = 'X';
                let button0 = document.createElement('button');
                button0.id = `btn${i}${j}0`;
                button0.dataset['pos'] = `${i}${j}O`;
                button0.innerText = '0';
                square.appendChild(buttonX);
                square.appendChild(button0);
                boardElem.style.gridTemplateRows = `repeat(${size}, auto)`;
                boardElem.style.gridTemplateColumns = `repeat(${size}, auto)`;
            }
        }
    }

    let setupInteraction = function(size) {
        // add event handlers to buttons so that it updates the board data structure
        //TODO: see how you can do event delegation here
        const btn = document.querySelectorAll('button');
        btn.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                // check if move valid
                if(moveValid(e.target, size)) {
                    // update UI to remove buttons and replace it with X or O
                    updateUI(e.target);
                    // test for win
                    if(testForWin(e.target, size)) {
                        alert('Game ends ' + e.target.dataset['pos'][2] + ' wins');
                    }
                }
            })
        })

    }

    let updateUI = function(target) {
        let btnclicked = target.dataset['pos'];
        let type = btnclicked[2];
        let xor0 = document.createElement('div')
        xor0.className = "xor0";
        xor0.innerText = type;
        let parent = target.parentNode;
        let children = parent.children;
        while(children.length!=0) {
            parent.removeChild(children[children.length-1]);
        }
        parent.appendChild(xor0);
    }

    let moveValid = function(target, size) {
        let btnclicked = target.dataset['pos'];
        let type = btnclicked[2];
        if(lastMove != type) {
            lastMove = type;
            return true;
        }
        return false;
    }

    let testForWin = function(target, size) {
        let btnclicked = target.dataset['pos'];
        let row = btnclicked[0];
        let col = btnclicked[1];
        let type = btnclicked[2];
        board[row][col] = type;
        let colcount = 0;
        let rowcount = 0;
        let diagcount = 0;
        // check row and col from pos
        // check full row or col for type
        for(let i=0; i<size; i++) {
            if(board[i][col] == type) {
                rowcount++;
            }
            if(board[row][i] == type) {
                colcount++;
            }
        }
        if(rowcount == size || colcount == size) {
            return true;
        }

        // check diag only if pos is on diagonal
        if(row == col) {
            for(let i=0; i<size; i++) {
                if(board[i][i] == type) {
                    diagcount++;
                }
            }
        }
        if(diagcount == size) {
            return true;
        }

        return false;
    }
    renderHtml(w._mazeSize);
    setupInteraction(w._mazeSize);
})(window)