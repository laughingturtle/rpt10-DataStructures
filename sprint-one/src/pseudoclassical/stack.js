var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.count + 1] = value; 
  this.count++;
},
Stack.prototype.pop = function(value){
  if(this.count > 0){
  // removes top of stack
  var deleted = this.storage[this.count];
  delete this.storage[this.count]; 
  this.count--;
  return deleted;
  }
}, 
Stack.prototype.size = function(value){
  return this.count;
}
