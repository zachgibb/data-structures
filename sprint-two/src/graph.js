var Graph = function(){
  this._nodes = {};
  this._length = 0;
};

Graph.prototype.addNode = function(newNode, toNode){

  var node = {};
  node._edges = {};

  if(this._length < 2) {
    for (var key in this._nodes) {
      node._edges[key] = this._nodes[key];
      this._nodes[key]._edges[newNode] = node;
    }
  }

  this._nodes[newNode] = node;
  
  if(toNode !== undefined && this._nodes[toNode]){
    node._edges[toNode] = this._nodes[toNode];
    this._nodes[toNode]._edges[newNode] = node;
  }

  this._length++;
};

Graph.prototype.contains = function(node){
  if (this._nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){

    var edges = this._nodes[node]._edges;
    for (var key in edges) {
      var connection = edges[key];
      delete connection._edges[node];
      delete connection;
    }

    delete this._nodes[node];
    this._length--;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  
  

  // if the fromNode exists in the Graph
  if(this._nodes[fromNode]) {
    // go into that node, and check if there is a connection to toNode
    if( this._nodes[fromNode]._edges[toNode] ) {
      // if so, return true,
      return true;
    } else {
      // else return false
      return false;
    }

  // else return false  
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // add a connection between two nodes
  this._nodes[fromNode]._edges[toNode] = this._nodes[toNode];
  this._nodes[toNode]._edges[fromNode] = this._nodes[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // go into each node and delete each other's references
  delete this._nodes[fromNode]._edges[toNode];
  delete this._nodes[toNode]._edges[fromNode];

  // if either has no edges after deletion, 
    // delete from Graph
  if (! Object.keys( this._nodes[fromNode]._edges ).length) {
    delete this._nodes[fromNode];
    this._length--;
  }
  if (! Object.keys( this._nodes[toNode]._edges ).length ) {
    delete this._nodes[toNode];
    this._length--;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
