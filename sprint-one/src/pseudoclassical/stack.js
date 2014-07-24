var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.length = 0;
  
};



Stack.prototype = {
  
  push : function(value){
    this.storage[this.storage.length] = value;
    this.storage.length++;
  },
  pop : function(){
    if (this.storage.length > 0) {
      this.storage.length--;
    }
    var temp = this.storage[this.storage.length];
    delete this.storage[this.storage.length];
    return temp;
  },
  size : function(){
    return this.storage.length;
  }
  
};