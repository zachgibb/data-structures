var makeBinarySearchTree = function(value){
  var tree = Object.create(binaryTreeMethods);
  tree.right = null;  //higher value
  tree.left = null;  //lower value
  tree.value = value;
  return tree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
var binaryTreeMethods = {};

//need an insert methods 
binaryTreeMethods.insert = function (value) {
  
  //check if new value is greater or less than parent value
    // if value is greater (right)
  if (this.value < value) {
    //check if right is null
    if(this.right === null){
      // make new node with the value and ref node to right
      this.right = makeBinarySearchTree(value);
    } else {
      //else rerun in right node
      this.right.insert(value);
    }
    
    // if value is less than parent (left)
  } else if (this.value > value) {
    //check if left is null
    if (this.left === null) {
      // make new node with the value and assign it to the left
      this.left = makeBinarySearchTree(value);
    } else {
    // else rerun in left node
      this.left.insert(value);
    }
  }
};

//needs a contains methods 
binaryTreeMethods.contains = function (value) {
  
};

//needs a depthFirstLog() methods 
binaryTreeMethods.depthFirstLog = function () {
  
};
