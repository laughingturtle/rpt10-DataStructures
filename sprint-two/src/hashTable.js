
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
  // look in the tuples in the buckets for k, if exist return it.
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // use the get method to retrieve the value from the key passed into the parameter
  // this._storage.get(k) should return the value (put in steven, get seagal)
  //if(bucket) {
   console.log(this._storage[index].get(k));
  //};
  //get the value from the limited array
};

HashTable.prototype.remove = function(k) {
   // remove tuple from bucket where k exist
  var index = getIndexBelowMaxForKey(k, this._limit);
};

// limitedArray.set(2,"fish");
// console.log(limitedArray);


/*
 * Complexity: What is the time complexity of the above functions?
 */


