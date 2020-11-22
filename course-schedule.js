/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // create adjlist from prerequisites
    let adjlist = {};
    prerequisites.forEach((elem) => {
        if (!adjlist[elem[1]]) {
            adjlist[elem[1]] = [elem[0]];
        } else {
            adjlist[elem[1]].push(elem[0]);
        }
    })

    let nodes = Object.keys(adjlist);
    let visit = {};
    nodes.forEach((elem) => {
        visit[elem] = 'unvisited';
    })

    for (let i = 0; i < numCourses; i++) {
        if(adjlist[i]) {
            if (isCyclic(adjlist, visit, i)) {
                return false;
            }
        }
    }

    return true;
};

var isCyclic = function (adjlist, visit, node) {
    visit[node] = 'visiting';
    for (let i = 0; i < adjlist[node].length; i++) {
        let neigh = adjlist[node][i];
        if (visit[neigh] == 'visiting') {
            return true;
        } else if (visit[neigh] == 'unvisited' && isCyclic(adjlist, visit, neigh)) {
            return true;
        }
    }
    visit[node] = 'visited';
    return false;
}

console.log(canFinish(2,[[1,0],[0,1]]));