// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

function findIslands(matrix) {
    let visit = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill('unvisited'));
    let count = 0;
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(visit[i][j] == 'unvisited' && matrix[i][j] == 1) {
                dfsvisit(matrix, [i,j],visit);
                count++;
            }
        }
    }
    return count;
}


/* @params {[]} row and col pair [i,j]
* @returns {[][]} 2d array of neighbor row col pair[[i,j],[i,j]]
*/
function findNeighbors (pair) {
    // find 4 neifghbors making sure that its not out of bounds and the neighbor shu be 1
    const i = pair[0];
    const j = pair[1];
    let neighbors = [];
    neighbors.push([i-1,j]);
    neighbors.push([i,j+1]);
    neighbors.push([i,j-1]);
    neighbors.push([i+1,j]);
    return neighbors;
}

function dfsvisit(matrix, point, visit) {
    visit[point[0]][point[1]] = 'visiting';
    const neigh = findNeighbors(point);
    neigh.forEach((pt) => {
        let row = pt[0];
        let col = pt[1];
        if(!(row <0 || col <0 || row>=matrix.length || col>= matrix[0].length || matrix[row][col]!=1)){
            if(visit[pt[0]][pt[1]] == 'unvisited') {
                dfsvisit(matrix, [row,col], visit);
            }
        }
    });
    visit[point[0]][point[1]] = 'visited';
}

const grid = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ];

console.log(findIslands(grid));;    