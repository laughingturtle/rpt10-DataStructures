
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

// Time Complexity = 0(1) 
Graph.prototype.addNode = function(node) {
  if(this.newGraph[node]){
    return;
  } else {
    this.newGraph[node] = {edges: {} };
  }
};

// Time Complexity = 0(1) 
Graph.prototype.contains = function(node) {
  if(this.newGraph[node]){
    return true;
  } else {
    return false;
  }
};

// Time Complexity = 0(n) 
Graph.prototype.removeNode = function(node) {
  //debugger;

  if (this.contains(node)){
    for (var key in this.newGraph[node].edges){
        this.removeEdge(node, key);
    }
    delete this.newGraph[node];
  }
};

// Time Complexity = 0(1) 
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.newGraph[fromNode].edges[toNode] && this.newGraph[toNode].edges[fromNode]) {
    return true;
  } else {
    return false;
  }
};

// Time Complexity = 0(1) 
Graph.prototype.addEdge = function(fromNode, toNode) { 
  

  if(this.newGraph[fromNode].edges[toNode]){
    return;
  } else {
    this.newGraph[fromNode].edges[toNode] = toNode; 
  }
  if(this.newGraph[toNode].edges[fromNode]){
    return;
  } else {
    this.newGraph[toNode].edges[fromNode] = fromNode;
  }
};

// Time Complexity = 0(1) 
Graph.prototype.removeEdge = function(fromNode, toNode) {
   if(this.contains(fromNode) && this.contains(toNode)){
   delete this.newGraph[fromNode].edges[toNode];
   delete this.newGraph[toNode].edges[fromNode];
   }
};

// Time Complexity = 0(n) 
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


