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

  // ** Time Complexity of addToTail = constant O(1) ** <--- !
  list.addToTail = function(value) {
    var newNode = Node(value);
    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

// ** Time Complexity of addToTail = constant O(1) ** <--- !

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
  // ** Time Complexity of addToTail = constant O(n) ** <--- !

  list.contains = function(target){
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// Complexity: What is the time complexity of the above functions?