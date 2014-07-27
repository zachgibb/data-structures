var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v){ // right now it's linear time, though it should be constant
  // setting a hash value to the key
  var i = getIndexBelowMaxForKey(k, this._limit);
  var subArray = this._storage.get(i);
  if (!subArray) {
    subArray = [];
    this._storage.set(i, subArray);
  }
  
  //check if the subarray already has the key-value pair.
  var exists = _.each(subArray, function(value) {
    // if it does,
    if(value[0] === k) {
      // replace value
      value[1] = v;
      // confirm that the key already exists
      return true;
    }
  });

  // if the key does not exist,
  if (!exists) {
    // push the key-value pair into the subarray
    subArray.push([k,v]);
  }

};

HashTable.prototype.retrieve = function(k){ // right now it's linear time, though it should be constant
  // set a hash value to the key
  var i = getIndexBelowMaxForKey(k, this._limit);

  // go into the subarray at hash value
  var subArray = this._storage.get(i);

  var result = null;

  //go over each item in the subarray
  _.each(subArray, function(value){

    // if key exists, result is equal to value
    if(value[0] === k) {
      result = value[1];
    }

  });

  //return null or the value
  return result;

};

HashTable.prototype.remove = function(k){ // linear time, should be constant
  // find the hash value of the key
  var i = getIndexBelowMaxForKey(k, this._limit);

  // go into the subarray
  var subArray = this._storage.get(i);

  _.each(subArray, function(value, index){
    // check through the subarray for the key
    if (value[0] === k) {
      // if it exists, delete the key-value pair
      subArray.splice(index, 1);
    }
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
