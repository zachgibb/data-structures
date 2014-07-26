var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){ // constant time
  this._storage[item] = true;
};

setPrototype.contains = function(item){ // constant time
  if( this._storage.hasOwnProperty(item) ) {
    return true;
  }
  return false;
  
};

setPrototype.remove = function(item){ // constant time
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
