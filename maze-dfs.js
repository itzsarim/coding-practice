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
        i>=row || i<0 || j>=col || j<0 || maze[i][j] == 1
    ) {
        return false;
    }

    if(
        i == dest[0] && j == dest[1]
    ) {
        return true;
    }
    
    if(
        memo[i][j] == VISITED || memo[i][j] == NO_PATH
    ) {
        return false;
    }
    
    memo[i][j] = VISITED;
    if(
     findPath(maze,i+1,j,dest, memo) ||
     findPath(maze,i-1,j,dest,memo) ||
     findPath(maze,i,j+1,dest,memo) ||
     findPath(maze,i,j-1,dest,memo) 
     ) {
        return true;
    }
    
    memo[i][j] = NO_PATH;
    return false;
}

var hasPath = function(maze, start, destination) {
    let memo = Array(maze.length).fill().map(() => Array(maze[0].length).fill("unvisited"));
    return findPath(maze,start[0],start[1],destination,memo)
};

let maze = 
[
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0],
    [1,1,0,1,1],
    [0,0,0,0,0]
];



console.log(hasPath(
    maze,  
    [0,4],
    [3,2]));