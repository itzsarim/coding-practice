let input = [[3,2,1],[4,3,2],[1,4,3]];

function zigzag(matrix) {
    let rowboundary = matrix.length - 1;
    let colboundary = matrix[0].length - 1;
    let up = true;
    let row = 0;
    let col = 0;

    while(true) {
        console.log(matrix[row][col]);

        if((row == 0 || row == rowboundary) && col!=colboundary ) {
            col++;
            console.log(matrix[row][col]);
            up = !up;
        } else if(col == 0 || col == colboundary) {
            row++;
            console.log(matrix[row][col]);
            up = !up;
        }

        if (row===rowboundary && col===colboundary) {
            break;
        }

        row = up ? row - 1 : row + 1;
        col = up ? col + 1 : col - 1; 
    }

}

zigzag(input);