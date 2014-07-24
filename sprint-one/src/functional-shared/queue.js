var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  instance.start = 0;
  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function (value){
    this.storage[this.length + this.start] = value;
    this.length++;
  },
  dequeue: function (){
    if( this.length > 0 ) {
      this.length--;
    }
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return temp;
  },
  size: function (){
    return this.length;
  }
};



