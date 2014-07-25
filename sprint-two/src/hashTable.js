
var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};

console.log(getIndexBelowMaxForKey('hello', 20)); //8
console.log(getIndexBelowMaxForKey('elephant', 20)); //15
console.log(getIndexBelowMaxForKey('whatever', 20)); //6
console.log(getIndexBelowMaxForKey('myname', 20)); //3
console.log(getIndexBelowMaxForKey('yourname', 20)); //12
console.log(getIndexBelowMaxForKey('hello', 20)); //8

/*
 * Complexity: What is the time complexity of the above functions?
 */