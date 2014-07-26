var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  //making the node with value
  var node = makeTree(value);

  //add node to parent children array
  this.children.push(node);

};

treeMethods.contains = function(target){
  //return true if it contains the value
  //else it return false

  var result = false;

  if (this.value === target) {
    return true;
  //are there any child nodes?
  } else if (this.children.length) {

    //if there is, call function on each of the child node
    _.each(this.children, function(child){

      // if any of the children have the target value, we will return true
      if ( child.contains(target) ) {
        result = true;
        return null;
      }
    });
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addChild: constant time
 * 
 * contains: linear time
 *
 */


