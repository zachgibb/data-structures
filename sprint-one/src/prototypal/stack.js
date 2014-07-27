var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance._storage = {};
  instance._length = 0;

  return instance;
};

var stackMethods = {
  // this has all the other code
  push: function(value){
    this._storage[this._length] = value;
    this._length++;
  },
  pop: function(){
    if(this._length){
      this._length--;
      var temp = this._storage[this._length];
      delete this._storage[this._length];
      return temp;
    }
  },
  size: function(){
    return this._length;
  }
};


