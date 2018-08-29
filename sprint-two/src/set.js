var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// Time Complexity = 0(1) 
setPrototype.add = function(item) {
  this._storage[item] = item;
};

// Time Complexity = 0(n) 
setPrototype.contains = function(item) {
  if(this._storage.hasOwnProperty(item)){
    return true;
  }
  return false;
};

// Time Complexity = Scott thinks 0(1), Malcolm thinks 0(n)
setPrototype.remove = function(item) {
if(this._storage[item]) {
  delete this._storage[item];
}
 // console.log('set - after delete = ', this._storage[item]);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */