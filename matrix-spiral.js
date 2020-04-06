let input = [[1,2,3],[4,5,6],[7,8,9]];
const LEFT = 'left';
const RIGHT = 'right';
const UP = 'up';
const DOWN = 'down';
const log = console.log;

function spiral(matrix) {
    let row = 0;
    let col = 0;
    let rowmax = matrix.length - 1;
    let rowmin = 0;
    let colmax = matrix[0].length -1 ;
    let colmin = 0;
    let dir = RIGHT;

    while(true) {
        log(matrix[row][col]);
        if(col === colmax && row === rowmin) {
            dir = DOWN;
        } else if(col === colmax && row == rowmax) {
            dir = LEFT;
            rowmin++;
            colmax--;
        } else if(col === colmin && row === rowmax) {
            dir = UP;
        } else if(col === colmin && row === rowmin && col !=0 && row !=0) {
            dir = RIGHT;
            rowmax--;
            colmax++;
        }

        if(row==1 && col==1) {
            break;
        }

        switch(dir) {
            case RIGHT:
                col++;
                break;
            case DOWN:
                row++;
                break;
            case LEFT:
                col--;
                break;
            case UP:
                row--;
                break;            
        }
    }
}

spiral(input);