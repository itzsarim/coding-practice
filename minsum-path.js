/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    var maxcol = grid[0].length;
    var maxrow = grid.length;

    
    function paths(start) {
        var row = start[0], col = start[1];
        if(row == maxrow || col == maxcol) {
            return Infinity;
        } 
        if(row == maxrow-1 && col == maxcol-1) {
            return grid[row][col];
        }
        return grid[row][col] + Math.min(paths([row+1,col]), paths([row,col+1]) );
    }
    
    return paths([0,0]);
};
    
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));