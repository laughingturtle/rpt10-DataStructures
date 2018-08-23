// head --> null <-- tail
// head --> node1 <-- tail
// (-->node1 points to null
// head --> node1 | node2 <-- tail
// (-->node1 points to node2, node2 points to null
// head --> node1 | node2 | node3 <-- tail
// (-->node1 points to node2, node2 points to node3, node3 points to null
// tail will always point to null this is how we know it's the tail

// head is either null or the first node.
// tail is either null or the last node - tails node next points to null.

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node instance
    // check if first node in list, head null will point to this node, node will point to null

    var newNode = Node(value);
    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  //  console.log('my tail = ', list.tail);
  //  console.log('my var = ', newNode);
  };
   // ** Time Complexity of addToTail = constant ** <--- !

  list.removeHead = function() {
    if (!list.head) {
      return list.head;
    }
    else {
     var temp = list.head.value;
     list.head = list.head.next;
     return temp;
    }
  };
  // ** Time Complexity of removeHead = constant ** <--- !

  list.contains = function(target){
  // iterate through the values and compare target to the values. Return true if target matches a value.
    let result = false;

    function search(node){
      if(node.value === target){
        result = true;
        return;
      }
      if (!node.next){
        return;
      }
      return search(node.next);
      }
    search(this.head);
    return result;
  };
  // ** Time Complexity of contains = linear **  <--- !
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// Complexity: What is the time complexity of the above functions?