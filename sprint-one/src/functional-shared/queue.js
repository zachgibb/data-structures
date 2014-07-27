var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance._storage = {};
  instance._length = 0;
  instance._start = 0;
  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function (value){
    this._storage[this._length + this._start] = value;
    this._length++;
  },
  dequeue: function (){
    if( this._length ) {
      this._length--;
      var temp = this._storage[this._start];
      delete this._storage[this._start];
      this._start++;
      return temp;
    }
  },
  size: function (){
    return this._length;
  }
};



