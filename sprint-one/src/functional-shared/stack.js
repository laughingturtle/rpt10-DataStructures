
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    count: 0,
    storage: {}
  };

  extend(someInstance,stackMethods);
  return someInstance;
};

var extend = function(someInstance, methods){
  for(var key in methods){
    someInstance[key] = methods[key];
  }
} 

var stackMethods = {
  push: function(value){
    console.log(this.count);
    this.storage[this.count + 1] = value; 
    this.count++;
  },
  pop: function(){
    if(this.count > 0){
      // removes top of stack
      var deleted = this.storage[this.count];
      delete this.storage[this.count]; 
      this.count--;
      return deleted;
    }
  }, 
  size: function() {
    return this.count;
  }
};


