
// [0,1,2,3,4,5,6,7] // storage
// index 0  --> [] // bucket
// in index 0 -- >[Steven, Seagal],[,] // tuples
// index 1  --> [[,],[,]] // bucket with tuples
// index 2  --> [[,]]
// index 3  --> [[,],[,],[]]
// etc

// or [[[,],[,]],[[,],[,]],[[,]],[[,],[,],[]],5,6,7,8] // everything

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if(!bucket){
    bucket = [];
    bucket.push([k,v]);
  } else {
    // check if k exists in any tuple[0] position, if k exists, get bucket position and replace key and value (k, v)
    //for (var i = 0; i < bucket.length; i++) {

    bucket.push([k,v]);
  }
  this._storage.set(index, bucket);

  // console.log('k = ', k);
  // console.log('v = ', v);
  // console.log('bucket =', bucket);
  // console.log('storage', this._storage.all());
};

HashTable.prototype.retrieve = function(k) {
 //debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
   for (var i = bucket.length - 1; i > -1; i--) {
     var tuple = bucket[i];
     if (tuple[0] === k) {
       return tuple[1];
     }
   }
};

HashTable.prototype.remove = function(k) {
   // remove tuple from bucket where k exist
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
   for (var i = 0; i < bucket.length; i++) {
     var tuple = bucket[i];
     if (tuple[0] === k) {
      tuple.splice(0,2);
     }
   }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


