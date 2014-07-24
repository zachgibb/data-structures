var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0;

  return instance;
};

var stackMethods = {
  // this has all the other code
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    if(this.length > 0){
      this.length--;
    }
    var temp = this.storage[this.length];
    delete this.storage[this.length];
    return temp;
  },
  size: function(){
    return this.length;
  }
};


