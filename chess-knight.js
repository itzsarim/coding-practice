class Point {
    constructor(x,y,level) {
        this.x = x;
        this.y = y;
        this.level = level;
    }
}

let isValidMove = (point,boardsize,memo) => {
    return point.x>=0 && point.x<boardsize && point.y>=0 && point.y<boardsize && memo[point.x][point.y]!='visited'
}

/*
* @param {point} knight position
* @return {[point]} all possible moves of knight
*/
let getNextMovesArray = (position) => {
    const moves = [[-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];
    let nextMovesPositions = [];
    moves.forEach((move) => {
        nextMovesPositions.push(new Point(position.x + move[0], position.y + move[1], position.level + 1));
    });
    return nextMovesPositions;
}

let minimumMovesHelper = (boardsize, queue, destination, memo) => {
    let startPoint = queue && queue.shift();
    if (startPoint) {
        memo[startPoint.x][startPoint.y] = 'visited';
        let nextMoves = getNextMovesArray(startPoint);
        // add the eligible neighbours of source in the queue
        nextMoves.forEach(point => {
            if(isValidMove(point,boardsize,memo)) {
                queue.push(point);
            }
        });
    }

    while(queue.length != 0) {
        let copyQueue = queue.slice();
        let neighbour = copyQueue.shift();
        if (neighbour.x == destination[0] && neighbour.y == destination[1]) {
            console.log(neighbour.level);
            return neighbour.level;
        }
        minimumMovesHelper(boardsize, queue, destination, memo)
    }

    return -1;
}

let minimumMoves = (boardsize, source, destination) => {
    let memo = Array(boardsize).fill().map(() => Array(boardsize).fill("unvisited"));
    let sourcePoint = new Point(source[0], source[1], 0);
    let queue = [sourcePoint];
    return minimumMovesHelper(boardsize, queue, destination, memo);
}

console.log(minimumMoves(
    8,  
    [1,4],
    [4,4]));