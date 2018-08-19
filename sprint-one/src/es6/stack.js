class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  push(value){
    this.storage[this.count + 1] = value; 
    this.count++;
  }
  pop(){
    if(this.count > 0){
    // removes top of stack
    var deleted = this.storage[this.count];
    delete this.storage[this.count]; 
    this.count--;
    return deleted;
    }
  }
  size(){
    return this.count;
  }
}