var numIslands = function(grid) {
    
    // create visit array
    var visit = Array(grid.length).fill([]).map(() => Array(grid[0].length).fill('unvisited'));
    var count = 0;
    
    function getneighbors(x,y) {
        var neigh = [];
        if(!(x+1>=grid.length)) {
            if(grid[x+1][y] == 1)
            neigh.push([x+1,y]);
        }
        if(!(x-1<0)) {
            if(grid[x-1][y] == 1)
            neigh.push([x-1,y]);
        }
        if(!(y+1>=grid[0].length)) {
            if(grid[x][y+1] == 1)
            neigh.push([x,y+1]);
        }
        if(!(y-1<0)){
            if(grid[x][y-1] == 1)
            neigh.push([x,y-1]);
        }
        return neigh;
    }
    
    function dfsvisit(x,y) {
        var neigh = getneighbors(x,y);
        visit[x][y] = 'visiting';
        for(var i=0;i<neigh.length; i++) {
            if(visit[neigh[i][0]][neigh[i][1]] == 'unvisited') {
                dfsvisit(neigh[i][0], neigh[i][1]);
            }
        }
        
        visit[x][y] = 'visited';
    }
    
    for(var i=0;i<grid.length;i++) {
        for(var j=0;j<grid[0].length;j++) {
            if(grid[i][j] == 1) {
                if(visit[i][j] == 'unvisited') {
                    count++;
                    dfsvisit(i,j);
                }
            }
        }
    }
    return count;
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))