// this.newGraph.node = new Graph(node);

// option 1
// {value: 'val', {fromNode: 'val', toNode:'val' }}
// option 2
// node = [];
// edges = [];
// option 3
// {value: 'val', [fromNode, toNode]},

// option 4
// {'NodeA': 'NodeA', edge: {'nodeA':[fromNode, toNode]},
// {'NodeB': 'NodeB', edge: {'nodeB':[fromNode, toNode]},
// {'NodeC': 'NodeC', edge: {'nodeD':[fromNode, toNode]},

// one object stores all the nodes for the Graph
// another object that stores all the edges of the graph
// {
//   Node1: " ",
//   Node2: " ",
//   Node3: " "
// }
// the important thing is that you get the constant time lookup

// [fromNode, toNode]}
// node value {nodeA: "nodeA"},
// node edge {nodeA:"nodeB"},

// Theres an array in here somewhere?
//forEach node

// Instantiate a new graph
var Graph = function(){
    this.newGraph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.newGraph[node] = new Graph(node);
    //console.log(this.newGraph);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.newGraph[node]){
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
   //removeEdge(this.newGraph[node]);
   delete this.newGraph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.newGraph[fromNode][toNode]){
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.newGraph[fromNode][toNode] = true;
  this.newGraph[toNode][fromNode] = true;
  console.log(this.newGraph);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.newGraph[fromNode][toNode];
  delete this.newGraph[toNode][fromNode];
  this.removeNode(fromNode);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i in key){

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


