var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 1;
  var latest = 1;

  // Implement the methods below
  someInstance.enqueue = function(value) {
   // var enqueued = storage[size + 1] = value;
    //console.log('enqueued = ', enqueued); 
    storage[latest] = value; 
    size ++;
    latest ++;
   // return enqueued;
  };

  someInstance.dequeue = function() {
    if(size > 0){
      var dequeued = storage[first];
     // console.log('dequeued = ', dequeued)
      delete storage[first]; 
      size --;
      first++; 
    }
    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

/*

1st 1 
2nd 2
3rd 3 
4th 4
5th 5

remove 1st
now 
*/
