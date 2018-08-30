var BinarySearchTree = function(value) {
    var currentNode = Object.create(binarySearchTreeMethods);
    currentNode.value = value;
    currentNode.left = undefined;
    currentNode.right = undefined;
    return currentNode;
}

var binarySearchTreeMethods = {
    // Time Complexity = Θ(log(n) avg case / O(n) worst case
    insert: function(value){
        var newNode = BinarySearchTree(value);

    //debugger;
        function recurse(node) {
          if (node.value > value && node.left === undefined) {
            node.left = newNode;
          } else if (node.value > value) {
            recurse(node.left);
          } else if (node.value < value && node.right === undefined) {
            node.right = newNode;
          } else if (node.value < value) {
            recurse(node.right);
          }
          console.log(node);
        }
        console.log('this = ', this);
        recurse(this);
    },
    // Time Complexity = Θ(log(n) avg case / O(n) worst case
    contains: function(value){
        var doesContain = false;

        function recurse(node) {
            if (node.value === value) {
            doesContain = true;
            } else if (node.left !== undefined && value < node.value) {
            recurse(node.left);
            } else if (node.right !== undefined && value > node.value) {
            recurse(node.right)
            }
        }
        recurse(this);
        return doesContain;
    },

    // Time Complexity = Θ(log(n) avg case / O(n) worst case
    depthFirstLog: function(cb){
        function recurse(node) {
            cb.call(node, node.value)

            if (node.left !== undefined) {
              recurse(node.left)
            }

            if (node.right !== undefined) {
              recurse(node.right);
            }
          }
          recurse(this);
    }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
