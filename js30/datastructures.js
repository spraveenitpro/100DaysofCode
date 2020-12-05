// /** Stack **/

/* 
var letters = []; // This is our Stack
var word = "freecodecamp";
var rword = "";

//Push to Stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//Pop from Stack

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

var Stack = function () {
  this.count = 0;
  this.storage = {};

  // Add value to top of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Remove value from top of the stack

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  // Return Size of the stack

  this.size = function () {
    return this.count;
  };

  // Return the top of the stack

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(2);
myStack.push(4);

myStack.push(7);

myStack.push(1);
myStack.push(9);

myStack.push(19);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek()); */

/** Sets **/

/* function mySet() {
  var collection = [];

  // Check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all values in the set
  this.values = function () {
    return collection;
  };

  // add element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // remove element from the set

  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // return size of the collection

  this.size = function () {
    return collection.length;
  };

  // return the union of 2 sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d")); */

/** Queue */

/* function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function (element) {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

function PriorityQueue () {
  var collection = [];
  this.printCollection = function() {
    (console.log(collection));
  };
  this.enqueue = function(element){
      if (this.isEmpty()){
          collection.push(element);
      } else {
          var added = false;
          for (var i=0; i<collection.length; i++){
               if (element[1] < collection[i][1]){ 
                  collection.splice(i,0,element);
                  added = true;
                  break;
              }
          }
          if (!added){
              collection.push(element);
          }
      }
  };
  this.dequeue = function() {
      var value = collection.shift();
      return value[0];
  };
  this.front = function() {
      return collection[0];
  };
  this.size = function() {
      return collection.length;
  };
  this.isEmpty = function() {
      return (collection.length === 0);
  };
}

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection(); */

/** Binary Search Tree */
/* Binary Search Tree */
/*
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

let bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
*/

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor(value) {
//     this.root = new Node(value);
//     this.count = 1;
//   }

//   size() {
//     return this.count;
//   }

//   insert(value) {
//     this.count++;
//     let newNode = new Node(value);

//     const searchTree = (node) => {
//       // If value < node.value, go left
//       if (value < node.value) {
//         // if no left child, append the new node there
//         if (!node.left) {
//           node.left = newNode;
//         } else {
//           //if there is a left child, look left again
//           searchTree(node.left);
//         }
//       }
//       // if value > node.value, go right
//       else if (value > node.value) {
//         if (!node.right) {
//           node.right = newNode;
//         } else {
//           //if there is a right child, look right again
//           searchTree(node.right);
//         }
//       }
//     };

//     searchTree(this.root);
//   }

//   min() {
//     let currentNode = this.root;
//     // Continue traversing until no more children
//     while (currentNode.left) {
//       currentNode = currentNode.left;
//     }
//     return currentNode.value;
//   }

//   max() {
//     let currentNode = this.root;
//     while (currentNode.right) {
//       currentNode = currentNode.right;
//     }
//     return currentNode.value;
//   }

//   contains(value) {
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value === currentNode.value) {
//         return true;
//       }
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else {
//         currentNode = currentNode.right;
//       }
//     }
//     return false;
//   }

//   // depth first search - branch by branch

//   // in-order
//   // left, root, right
//   // 2,3,12,15,28,36,39

//   dfsInOrder() {
//     let result = [];
//     const traverse = (node) => {
//       // if left child exists, go left again
//       if (node.left) traverse(node.left);
//       // capture root node value
//       result.push(node.value);
//       // if right child exists, go right again
//       if (node.right) traverse(node.right);
//     };
//     traverse(this.root);
//     return result;
//   }

//   // pre-order
//   // root, left, right
//   // 15, 3, 2, 12,36, 28, 39
//   dfsPreOrder() {
//     let result = [];

//     const traverse = (node) => {
//       // capture root node value
//       result.push(node.value);
//       // if left child exists, go left again
//       if (node.left) traverse(node.left);
//       // if right child exists, go right again
//       if (node.right) traverse(node.right);
//     };
//     traverse(this.root);
//     return result;
//   }

//   // post-order
//   // left, right, root
//   // 2,12,3,28, 39,36,15
//   dfsPostOrder() {
//     let result = [];

//     const traverse = (node) => {
//       // if left child exists, go left again
//       if (node.left) traverse(node.left);
//       // if right child exists, go right again
//       if (node.right) traverse(node.right);

//       // capture root node value
//       result.push(node.value);
//     };
//     traverse(this.root);
//     return result;
//   }

//   // Breadth first search - level by level
//   // use a queue
//   // 15,3,36,2,12,28,39

//   bfs() {
//     let result = [];
//     let queue = [];

//     queue.push(this.root);
//     while (queue.length) {
//       let currentNode = queue.shift();
//       result.push(currentNode.value);

//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }

//     return result;
//   }
// }

// const bst = new BST(15);

// bst.insert(3);
// bst.insert(36);
// bst.insert(2);
// bst.insert(12);
// bst.insert(28);
// bst.insert(39);

// console.log(bst.size());
// console.log(bst.min());
// console.log(bst.max());

// console.log(bst.contains(5));

// // in-order 2,3,12,15,28,36,39
// console.log(bst.dfsInOrder());

// // pre-order 15, 3, 2, 12,36, 28, 39
// console.log(bst.dfsPreOrder());

// // post-order 2,12,3,28, 39,36,15
// console.log(bst.dfsPostOrder());

// //BFS
// console.log(bst.bfs());

/**Hash Table */

function hashStringToInt5() {
  return 5;
}

class HashTable {
  table = new Array(100);
  getItem = (key) => {
    const idx = hashStringToInt5(key);
    return this.table[idx];
  };

  setItem = (key, value) => {
    const idx = hashStringToInt5(key);
    this.table[idx] = value;
  };
}

const myTable = new HashTable();
myTable.setItem("FirstName", "Pete");
myTable.getItem("FirstName");

console.log(myTable.getItem("FirstName"));
