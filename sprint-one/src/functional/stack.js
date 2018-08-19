var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // adds to top of stack
    storage[size + 1] = value; 
    size ++;
   // console.log('my storage object = ', storage); 
    //console.log('size = ', size);
  };

  someInstance.pop = function() {
    //console.log('length = ', Object.keys(someInstance).length);
    if(size > 0){
      // removes top of stack
      //console.log('my storage object key to delete = ', storage[size]); 
      var deleted = storage[size];
      delete storage[size]; 
      size --;
      return deleted;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
