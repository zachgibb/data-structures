var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){ // constant time
    var node = makeNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function(){ // constant time
    if (this.head !== null) {
      var result = this.head.value;
      this.head = this.head.next;
      return result;
    }
  };

  list.contains = function(target){ // linear time
    var current = this.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){ // constant time
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?\
 *
 * .addToTail: constant time
 * .removeHead: constant time
 * .contains: linear time
 * .makeNode: constant time
 *
 */