function Graph() {
    this.adjList = {};
  }
  
  Graph.prototype.addVertex = function(vertex) {
    this.adjList[vertex] = [];
  }
  
  Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
  }
  
  Graph.prototype.print = function() {
    console.log('Graph adjList is ', this.adjList);
  }
  
  const graph = new Graph();
  
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  graph.addVertex(5);
  graph.addVertex(6);
  
  graph.addEdge(1,2);
  graph.addEdge(1,3);
  graph.addEdge(2,4);
  graph.addEdge(4,6);
  graph.addEdge(4,3);
  graph.addEdge(3,5);
  
  graph.print();
  
  // DFS
  //console.log('DFS visits')
  
  Graph.prototype.dfs = function() {
    // extract all the vertex from the adj list
    const node = Object.keys(this.adjList);
    const visit = {}; // has 3 states--'visited'/'visiting'/'unvisited'
    //initialize visit obj
    node.forEach((elem) => {
      visit[elem] = 'unvisited';
    })
    const stack = [];
    // run DFS on each node
    // for(let i=0; i<node.length; i++) {
    //   this._dfsUtil(node[i], visited, stack);
    // }// all nodes as it may have unconnected nodes
    this._dfsUtil(node[0], visit, stack);// first key is root
  }
  
  Graph.prototype._dfsUtil = function(vertex, visit, stack) {
    // mark node 'visiting'
    visit[vertex] = 'visiting';
    // process node
    // for all 'unvisited' neightbour perform dfs
    for(var i=0;i<this.adjList[vertex].length;i++) {
      if(visit[this.adjList[vertex][i]] === 'visiting') {
        console.log('cycle detected');
      }
      else if(visit[this.adjList[vertex][i]] === 'unvisited') {
        this._dfsUtil(this.adjList[vertex][i], visit, stack);
      }
    }
    // mark node 'visited'
    visit[vertex] = 'visited';
    stack.push(vertex);// topological sort
    console.log('sorted graph is', stack);
  }
  
  graph.dfs();
  
  
  //BFS
  //console.log('BFS visits')
  
  Graph.prototype.bfs = function() {
    const nodes = Object.keys(this.adjList);
    const visited = {};
    for(let i=0; i<nodes.length; i++) {
      this._bfsUtil(nodes[i], visited);
    }
  }
  
  Graph.prototype._bfsUtil = function (vertex, visited) {
    const q = [];
    q.nq = q.push; //queue.enqueue
    q.dq = q.shift; //queue.dequeue
    q.nq(vertex);
    let nodeToProcess;
    while(q.length != 0) {
      nodeToProcess = q.dq();
      if(!visited[nodeToProcess]) {
        visited[nodeToProcess] = true;
        //console.log('visited ', nodeToProcess);
        this.adjList[nodeToProcess].forEach(elem => q.nq(elem));
      }
    }
  }
  
  graph.bfs();
  
  
  
// given a graph and number T, find if T exists in the graph

Graph.prototype.search = function(num) {
  let vertexs = Object.keys(this.adjList); // first vertex in the adjlist
  let visit = {};
  vertexs.forEach((vertex) => {
    visit[vertex] = 'unvisited';
  });
  return this._searchDfsUtil(vertexs[0], visit, num);
}

Graph.prototype._searchDfsUtil = function(vertex, visit, num) {
  visit[vertex] = 'visiting';
  if (vertex == num) {return true};
  for(let i=0; i<this.adjList[vertex].length; i++) {
    if(visit[this.adjList[vertex][i]] == 'visiting') {
      console.log('cycle detected');
    } else if(visit[this.adjList[vertex][i]] == 'unvisited' && this._searchDfsUtil(this.adjList[vertex][i], visit, num)){
      return true;
    }
  }
  visit[vertex] = 'visited';
  return false;
}
console.log(graph.search(7));

// Given a directed graph, make a clone
Graph.prototype.visit = function() {
  let vertexs = Object.keys(this.adjList); // first vertex in the adjlist
  let visit = {};
  vertexs.forEach((vertex) => {
    visit[vertex] = 'unvisited';
  });
  return visit;
}

Graph.prototype.clone = function(root) {
  if(root == null) {
    return null;
  }
  let adjListCopy = {};
  let rootCopy = root;
  let map = new Map();
  map.set(root, rootCopy);
  this._cloneUtil(root, adjListCopy, map, this.visit);
  return adjListCopy;
}

Graph.prototype._cloneUtil = function(node, adjListCopy, map, visit) {
  visit[node] = 'visiting';
  for(let i=0; i<this.adjList[node].length; i++) {
    let neigh = this.adjList[node][i];
    let neighCopy;
    if(!map.get(neigh)) { // this nodes clone was not made before
      // clone it and then add it to adjListCopy
      neighCopy = neigh;
      adjListCopy[neighCopy] = [];
      map.set(neigh, neighCopy);
    } 
    if(adjListCopy[map.get(node)]){
      adjListCopy[map.get(node)].push(map.get(neigh));
    } else{
      adjListCopy[map.get(node)] = [];
    }
    if(visit[neigh] == 'unvisited') {
      this._cloneUtil(neigh, adjListCopy, map, visit);
    }
  }
  visit[node] = 'visited';
}

console.log('adjList clone', graph.clone(1));


// level order traversal
Graph.prototype.levelTraverse = function() {
  let vertexs = Object.keys(this.adjList);
  let root = vertexs[0];
  let q = [];
  q.nq = q.push;
  q.dq = q.shift;
  q.nq(root);

  while(q.length != 0) {

  }

}