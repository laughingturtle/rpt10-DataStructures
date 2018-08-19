var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.first = 1;
  this.latest = 1;
};

Queue.prototype.enqueue = function(value){
  //console.log(this.count);
  this.storage[this.latest] = value; 
  this.count ++;
  this.latest ++;
},
Queue.prototype.dequeue = function(){
  if(this.count > 0){
    var dequeued = this.storage[this.first];
   // console.log('dequeued = ', dequeued)
    delete this.storage[this.first]; 
    this.count --;
    this.first++; 
  }
  return dequeued;
},
Queue.prototype.size = function() {
  return this.count;
}  

