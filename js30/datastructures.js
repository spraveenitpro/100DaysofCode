// /** Stack **/
// // Functions : push, pop, peek, length

// var letters = []; // This is our Stack
// var word = "freecodecamp";
// var rword = "";

// //Push to Stack
// for (var i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// //Pop from Stack

// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }

// if (rword === word) {
//   console.log(word + " is a palindrome");
// } else {
//   console.log(word + " is not a palindrome");
// }

// var Stack = function () {
//   this.count = 0;
//   this.storage = {};

//   // Add value to top of the stack
//   this.push = function (value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };

//   // Remove value from top of the stack

//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined;
//     }

//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };
//   // Return Size of the stack

//   this.size = function () {
//     return this.count;
//   };

//   // Return the top of the stack

//   this.peek = function () {
//     return this.storage[this.count - 1];
//   };
// };

// var myStack = new Stack();
// myStack.push(2);
// myStack.push(4);

// myStack.push(7);

// myStack.push(1);
// myStack.push(9);

// myStack.push(19);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("freeCodeCamp");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

/** Sets **/

// function mySet() {
//   var collection = [];

//   // Check for the presence of an element and return true or false
//   this.has = function (element) {
//     return collection.indexOf(element) !== -1;
//   };

//   // this method will return all values in the set
//   this.values = function () {
//     return collection;
//   };

//   // add element to the set
//   this.add = function (element) {
//     if (!this.has(element)) {
//       collection.push(element);
//       return true;
//     }
//     return false;
//   };

//   // remove element from the set

//   this.remove = function (element) {
//     if (this.has(element)) {
//       index = collection.indexOf(element);
//       collection.splice(index, 1);
//       return true;
//     }
//     return false;
//   };

//   // return size of the collection

//   this.size = function () {
//     return collection.length;
//   };

//   // return the union of 2 sets
//   this.union = function (otherSet) {
//     var unionSet = new mySet();
//     var firstSet = this.values();
//     var secondSet = otherSet.values();

//     firstSet.forEach(function (e) {
//       unionSet.add(e);
//     });
//     secondSet.forEach(function (e) {
//       unionSet.add(e);
//     });
//     return unionSet;
//   };

//   this.intersection = function (otherSet) {
//     var intersectionSet = new mySet();
//     var firstSet = this.values();
//     firstSet.forEach(function (e) {
//       if (otherSet.has(e)) {
//         intersectionSet.add(e);
//       }
//     });
//     return intersectionSet;
//   };

//   this.difference = function (otherSet) {
//     var differenceSet = new mySet();
//     var firstSet = this.values();

//     firstSet.forEach(function (e) {
//       if (!otherSet.has(e)) {
//         differenceSet.add(e);
//       }
//     });
//     return differenceSet;
//   };

//   this.subset = function (otherSet) {
//     var firstSet = this.values();
//     return firstSet.every(function (value) {
//       return otherSet.has(value);
//     });
//   };
// }

// var setA = new mySet();
// var setB = new mySet();

// setA.add("a");
// setB.add("b");
// setB.add("c");
// setB.add("a");
// setB.add("d");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());
// var setC = new Set();
// var setD = new Set();
// setC.add("a");
// setD.add("b");
// setD.add("c");
// setD.add("a");
// setD.add("d");
// console.log(setD.values());
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));

/** Queue */

// function Queue() {
//   collection = [];
//   this.print = function () {
//     console.log(collection);
//   };

//   this.enqueue = function (element) {
//     collection.push(element);
//   };
//   this.dequeue = function (element) {
//     return collection.shift();
//   };

//   this.front = function () {
//     return collection[0];
//   };

//   this.size = function () {
//     return collection.length;
//   };

//   this.isEmpty = function () {
//     return collection.length === 0;
//   };
// }

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

// function PriorityQueue () {
//   var collection = [];
//   this.printCollection = function() {
//     (console.log(collection));
//   };
//   this.enqueue = function(element){
//       if (this.isEmpty()){
//           collection.push(element);
//       } else {
//           var added = false;
//           for (var i=0; i<collection.length; i++){
//                if (element[1] < collection[i][1]){ //checking priorities
//                   collection.splice(i,0,element);
//                   added = true;
//                   break;
//               }
//           }
//           if (!added){
//               collection.push(element);
//           }
//       }
//   };
//   this.dequeue = function() {
//       var value = collection.shift();
//       return value[0];
//   };
//   this.front = function() {
//       return collection[0];
//   };
//   this.size = function() {
//       return collection.length;
//   };
//   this.isEmpty = function() {
//       return (collection.length === 0);
//   };
// }

// var pq = new PriorityQueue();
// pq.enqueue(['Beau Carnes', 2]);
// pq.enqueue(['Quincy Larson', 3]);
// pq.enqueue(['Ewa Mitulska-Wójcik', 1])
// pq.enqueue(['Briana Swift', 2])
// pq.printCollection();
// pq.dequeue();
// console.log(pq.front());
// pq.printCollection();
