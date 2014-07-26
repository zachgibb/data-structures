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
  // base case: check value and return true if the value is in this node
  if(value === this.value) {

    return true;
  } else {
    // evaluate if value is greater or less than node's value
    // if greater than
    if (value > this.value) {

      // check if node.right is null
      if (this.right === null) {
        // if is null, return false
        return false;
      } else {
        // if is not null, redo .contains on node.right
        return this.right.contains(value);
      }


    // if less than
    } else {
      
      // check if node.left is null
      if (this.left === null) {
        // if is null, return false
        return false;
      } else {
        // if is not null, redo .contains on node.left
        return this.left.contains(value);
      }

    }
  }

  
};

//needs a depthFirstLog() methods 
binaryTreeMethods.depthFirstLog = function (iterator) {
  // run the iterator on the current node value, 
  iterator(this.value);

  // if the right node is not null
  if(this.right !== null) {
    // call depthFirstLog on the right node
    this.right.depthFirstLog(iterator);
  }

  // if the left node is not null
  if(this.left !== null) {
    // call depthFirstLog on the left node
    this.left.depthFirstLog(iterator);
  }
};
