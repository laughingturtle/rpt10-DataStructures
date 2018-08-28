var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me ?

  extend(newTree, treeMethods);
 // console.log(newTree);
  return newTree;
};

var extend = function(newTree, methods){
  for(var key in methods){
    newTree[key] = methods[key];
  }
}
var treeMethods = {};

treeMethods.addChild = function(value) {
  const node = Object.create(Tree(value)); // {value: bluefish, children: []}
  this.children.push(node);
};

treeMethods.contains = function(target) {
  let result = false;
  var context = this;

    function traverse(node){
      if(node.value === target){
        result = true;
        return;
      }
      for (var i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
    traverse(context);
    return result;
};

//  const node1 = Tree("parent");
//  node1.addChild("bluefish");
//  node1.contains("bluefish");

/*
 * Complexity: What is the time complexity of the above functions?
 */

 //  newTree1 {value: "cat", children: [
//    newTree2 {value: "kitten", children: []},
//    node {value: "kitten2", children: [
//      node2 {value: "kitten's child", children: []}
//  ]}
//]}
//  what tree are we on, get that tree and append to child
//
//  const tree1 = new Tree("cat")  <-- -but functional shared
//  const tree2 = new Tree("kitten")
//  tree1.addChild(tree2);
//  const node = new Tree("kitten2");
//  tree1.addChild(node);
//  const node2 = new Tree("kitten's child");
//  node.addChild(node2);