/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adjlist = {};
    for(let i=0; i< numCourses; i++){
        adjlist[i] = [];
    }
    prerequisites.forEach((elem) => {
        adjlist[elem[1]].push(elem[0]);
    })

    let nodes = Object.keys(adjlist);
    let visit = {};
    nodes.forEach((elem) => {
        visit[elem] = 'unvisited';
    });
    let stack = []
    for(let i=0; i<numCourses; i++){
        if(visit[i] == 'unvisited'){
            if(isCyclic(adjlist, visit, i, stack)) {
                return [];
            }
        }
    }
    return stack;
};

var isCyclic = function (adjlist, visit, node, stack) {
    visit[node] = 'visiting';
    for (let i = 0; i < adjlist[node].length; i++) {
        let neigh = adjlist[node][i];
        if(visit[neigh] == 'visiting') {
            return true
        }
        else if (visit[neigh] == 'unvisited' && isCyclic(adjlist, visit, neigh, stack)) {
            return true
        }
    }
    visit[node] = 'visited';
    stack.unshift(node);
    return false;
}

console.log(findOrder(4, [[0,1],[1,2],[3,2]]));