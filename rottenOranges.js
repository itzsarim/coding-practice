/**
 * @param {number[][]} grid
 * @return {number}
 */
const rottenOranges = (grid) => {
    //create an array of freshorange and rottenorange locations
    const freshOranges = new Set();
    let rottenOranges = [];
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] === 1) {
                freshOranges.add(`${i}${j}`);
            } else if(grid[i][j] === 2) {
                rottenOranges.push([i,j]);
            }
        }
    }

    //create an array of directions
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let infectedOranges;
    let minutes = 0;
    //create an infected array, in this array keep adding freshorange that is next to a rotten orange
    //do this till we have fresh oranges, if at a point infected array size is 0, return -1 since nothing can be infected anymore
    while(freshOranges.size > 0) {
        infectedOranges = [];
        for(let k=0; k<rottenOranges.length; k++) {
            for(let l=0; l<directions.length; l++) {
                let nexti = rottenOranges[k][0] + directions[l][0];
                let nextj = rottenOranges[k][1] + directions[l][1];
                if(nexti>=0 && nexti <grid.length && nextj>=0 && nextj<grid[0].length) {
                    let toCheck = `${nexti}${nextj}`;
                    if(freshOranges.has(toCheck)){
                        infectedOranges.push([nexti,nextj]);
                        freshOranges.delete(toCheck);
                    }
                }
            }
        }
        if(infectedOranges.length == 0) {
            return -1;
        }
        rottenOranges = infectedOranges;
        minutes++;
    }
    return minutes;
}
const grid = [[2,1,1],[1,1,0],[0,1,1]];
console.log(rottenOranges(grid));