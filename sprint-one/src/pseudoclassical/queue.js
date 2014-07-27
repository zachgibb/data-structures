var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._length = 0;
  this._start = 0;
  
};



Queue.prototype.enqueue = function (value) {
    this._storage[this._length + this._start] = value;
    this._length++;
};

Queue.prototype.dequeue = function () {
    if (this._length) {
      this._length--;
      var temp = this._storage[this._start];
      delete this._storage[this._start];
      this._start++;
      return temp;
    }
};

Queue.prototype.size = function(){
  return this._length;
};
