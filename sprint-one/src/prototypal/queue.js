var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.first = 1;
  someInstance.latest = 1;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    //console.log(this.count);
    this.storage[this.latest] = value; 
    this.count ++;
    this.latest ++;
  },
  dequeue: function(){
    if(this.count > 0){
      var dequeued = this.storage[this.first];
     // console.log('dequeued = ', dequeued)
      delete this.storage[this.first]; 
      this.count --;
      this.first++; 
    }
    return dequeued;
  }, 
  size: function() {
    return this.count;
  }
};

