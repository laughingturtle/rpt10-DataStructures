
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

  // graph: {
  //   cat { edges: {} }
  // }

// =========

  // node('smith')
  //     \
  //      \
  //       \
  //   node('john') ------ node('jackson')

  // graph: {  cat { edges: {} } }

  // graph: {
  //   john { edges: {
  //             smith: "value of smith"
  //           , jackson: "2"
  //         }
  //   },
  //   smith { edges: {
  //             john: "3"
  //         }
  //   },
  //   jackson { edges:
  //             john,
  //         }
  //   },
  // }

  // graph         .john       .edges    .smith
  // this.newGraph [fromNode]  .edges    [toNode]


// Instantiate a new graph
var Graph = function(){
    this.newGraph = {};
   // this.newGraph.edge = {};
};

// var Edge = function(){
//   this.newEdge = {};
//   this.edges = "edges";
//  // this.newGraph.edge = {};
// };

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  // if(this.newGraph[node].hasOwnProperty(node)) //linear time
  // if(this.newGraph[node]) //constant time
  // this.newGraph[node] = this.newGraph[node] || {edges: {} };

  //check to see if this.newGraph has this node as key, if it doesn't create a new key using node, and create an edges for it
  if(this.newGraph[node]){
    return;
  } else {
    this.newGraph[node] = {edges: {} };
  }
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
  //debugger;

 // delete edges in other keys where node to be deleted is referenced
  if (this.contains(node)){
    for (var key in this.newGraph[node].edges){
        console.log(node);
        this.removeEdge(node, key);
    }
    delete this.newGraph[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //console.log('my result = ', this.newGraph[fromNode].edges[toNode]);

  if(this.newGraph[fromNode].edges[toNode] && this.newGraph[toNode].edges[fromNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { //fromNode john, toNode jackson
  //this.newGraph[fromNode][toNode] = true;

  if(this.newGraph[fromNode].edges[toNode]){
    return;
  } else {
    this.newGraph[fromNode].edges[toNode] = toNode; // {jackson: jackson}
  }
  if(this.newGraph[toNode].edges[fromNode]){
    return;
  } else {
    this.newGraph[toNode].edges[fromNode] = fromNode;
  }
  //{smith, jackson }
  //john{ edges: jackson}
 console.log(this.newGraph);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
   if(this.contains(fromNode) && this.contains(toNode)){
   delete this.newGraph[fromNode].edges[toNode];
   delete this.newGraph[toNode].edges[fromNode];
   }

//  this.removeNode(fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.newGraph){
    if (this.newGraph.hasOwnProperty(key)) {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


