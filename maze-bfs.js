class Point {
    constructor(x,y,level) {
        this.x = x;
        this.y = y;
        this.level = level;
    }
}

let isValidNeighbor = (point,maze,memo) => {
    return point.x>=0 && point.x<maze.length && point.y>=0 && point.y<maze[0].length && maze[point.x][point.y] !== 1 && memo[point.x][point.y]!='visited'
}

let hasPathHelper = (maze, queue, destination, memo) => {
    let startPoint = queue && queue.shift();
    if (startPoint) {
        memo[startPoint.x][startPoint.y] = 'visited';
        let top =  new Point(startPoint.x-1, startPoint.y, startPoint.level + 1);
        let left = new Point(startPoint.x, startPoint.y-1, startPoint.level + 1);
        let right = new Point(startPoint.x, startPoint.y+1, startPoint.level + 1);
        let down = new Point(startPoint.x+1, startPoint.y, startPoint.level + 1);
        // add the eligible neighbours of source in the queue
        [top, left, right, down].forEach(point => {
            if(isValidNeighbor(point,maze,memo)) {
                queue.push(point);
            }
        });
    }

    while(queue.length != 0) {
        let copyQueue = queue.slice();
        let neighbour = copyQueue.shift();
        if (neighbour.x == destination[0] && neighbour.y == destination[1]) {
            console.log(neighbour.level);
            return true;
        }
        if (hasPathHelper(maze, queue, destination, memo)) {
            return true;
        }
    }

    return false;
}

let hasPath = (maze, source, destination) => {
    let memo = Array(maze.length).fill().map(() => Array(maze[0].length).fill("unvisited"));
    let sourcePoint = new Point(source[0], source[1], 0);
    let queue = [sourcePoint];
    return hasPathHelper(maze, queue, destination, memo);
}

let maze = 
[
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0],
    [1,1,0,1,0],
    [0,0,0,0,0]
];

console.log(hasPath(
    maze,  
    [1,4],
    [4,4]));