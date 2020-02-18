// var VISITED = 'visited';
// var NO_PATH = 'no_path';
// var UNIVISTED = 'unvisited';

// function pathExists(arr, i, j, memo) {
//     // check out of bound, or wall, or if node visited or no_path from here
//     if(i<0 || i>=arr.length || j<0 || j>=arr[0].length || memo[i][j] === VISITED || memo[i][j] === NO_PATH || arr[i][j] === 1) {
//         return false;
//     }
//     // if we have reached at the bottom right corener , we have found a path
//     if(i === arr.length-1 && j === arr[0].length - 1) {
//         return true;
//     }

//     memo[i][j] = VISITED;
//     // check paths in all directions
//     if(
//         pathExists(arr, i,j+1,memo) ||
//         pathExists(arr, i+1,j,memo) ||
//         pathExists(arr, i-1,j,memo) ||
//         pathExists(arr, i,j-1,memo)
//      ) {
//          return true;
//      }

//      memo[i][j] = NO_PATH;
//      return false;
// }

// var arr = [[0,1,1,1],[0,0,0,1],[1,1,0,1],[1,1,0,0]];
// var memo = [
//     [UNIVISTED,UNIVISTED,UNIVISTED,UNIVISTED],
//     [UNIVISTED,UNIVISTED,UNIVISTED,UNIVISTED],
//     [UNIVISTED,UNIVISTED,UNIVISTED,UNIVISTED],
//     [UNIVISTED,UNIVISTED,UNIVISTED,UNIVISTED]
// ]

// if(pathExists(arr, 0, 0, memo)) {
//     console.log('there is a path');
// } else {
//     console.log('no path in there');
// }

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var VISITED = 'visited';
var UNVISITED = 'unvisited';
var NO_PATH = 'no_path';
function findPath(maze, i, j, dest, memo) {
    var col = maze[0].length;
    var row = maze.length;
    if(
        i>=row || i<0 || j>=col || j<0 || maze[i][j] === 1
    ) {
        return false;
    }
    
    if(
        memo[i][j] === VISITED || memo[i][j] === NO_PATH
    ) {
        return false;
    }
    
    if(
        i === dest[0] && j === dest[1]
    ) {
        return true;
    }
    
    memo[i][j] = VISITED;
    if(
        findPath(maze, i+1,j, dest, memo) ||
        findPath(maze, i-1,j,dest,memo) ||
        findPath(maze,i,j+1,dest,memo) ||
        findPath(maze,i,j-1,dest,memo)
    ) {
        return true;
    }
    
    maze[i][j] = NO_PATH;
    return false;
}

function createMemo(maze) {
    var memo = [];
    var memoinside = [];
    var col = maze[0].length;
    var row = maze.length;
    var i=0,j=0;
    
    while(i!=col) {
        memoinside.push(UNVISITED);
        i++;
    }
    
    while(j!=row) {
        memo.push(memoinside);
        j++;
    }
    return memo;
}

function hasPath(maze, start, destination) {
    var mem = createMemo(maze);
    return findPath(maze,start[0],start[1],destination, mem)
};

var maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]];
var start = [0,0];
var destination = [4,4];
var arr = [[0,1,1,1],[0,0,0,1],[1,1,0,1],[1,1,0,0]];


if(hasPath(arr, start, [3,3])) {
    console.log('there is a path');
} else {
    console.log('no path in there');
}