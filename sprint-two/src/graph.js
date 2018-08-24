// option 1
// {value: 'val', {fromNode: 'val', toNode:'val' }}

// option 2
// node = [];
// edges = [];

// option 3
// {value: 'val', [fromNode, toNode]}, 



// Instantiate a new graph
var Graph = function() {
    this.newGraph = {};
    this.vertice = null; // this is the node
    this.edges = null; // this is the line, or edge, or pointer

   // this.newGraph.node = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //this.storage = node;
  this.newGraph[node] = {edges:{}};
  console.log(this.newGraph);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


