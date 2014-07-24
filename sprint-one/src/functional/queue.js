var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[start + size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if( size > 0 ) {
      size--;
    }
    var temp = storage[start];
    delete storage[start];
    start++;
    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
