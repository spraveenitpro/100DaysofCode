/** Stack **/
// Functions : push, pop, peek, length

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
console.log(myStack.peek());
