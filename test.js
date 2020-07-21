/* // Foreach loop
console.clear();

var numbers = [34, 3, 1, 21, 4, 98, 54, 2, 344, 652, 21, 12];

numbers.forEach((number, index, array) =>
  console.log(`${number} located at ${index} in ${array} `)
);

// Fibonacci Series

function fib(num) {
  // 1,1,2,3,5,8,13,21,34....

  var a = 0;
  var b = 1;
  var result = b;

  for (var i = 0; i < num; i++) {
    console.log(result);
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}

fib(20);

// Prime Number

function isPrime(num) {
  var series = [];
  for (var i = 2; i < num; i++) {
    if (num % i !== 0) {
      return "Prime";
    }
  }
}

isPrime(23); //?

// Smallest common multiple

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let sol = max;
  for (let i = max - 1; i >= min; i--) {
    console.log(`Sol is ${sol} and i is ${i}`);

    if (sol % i) {
      sol = sol + max;
    }
  }
}

smallestCommons([1, 5]);

//Drop it

function dropElements(arr, func) {
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[i])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
}); //?

//SteamRoller

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]); //?

//Binary Agents

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
); //?

binaryAgent(
  "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
); //?

//Everything be True

function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

// Arguments Options

function addTogether() {
  let args = Array.from(arguments);
  let sum = 0;

  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] == "number") {
      sum = sum + args[i];
    } else {
      return undefined;
    }
  }
  return sum;
}

addTogether(23, 30); //?
addTogether(5)(7);

// Make a Person

var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  var fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getSecondName = function () {
    return fullName.split(" ")[1];
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.getFullName = function () {
    return fullName;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
bob.setFullName("Praveen Selva");

//Map the debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
    );
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]); //?

// Find Object

var objArray = [
  { id: 0, name: "Object 0", otherProp: "321" },
  { id: 1, name: "O1", otherProp: "648" },
  { id: 2, name: "Another Object", otherProp: "850" },
  { id: 3, name: "Almost There", otherProp: "046" },
  { id: 4, name: "Last Obj", otherProp: "984" },
];
console.clear();
var obj = objArray.find((ob) => ob.id == 3);

console.log(obj); //?

// Basic Recursion:

let wr = (msg = "----") => document.write(`<br> ${msg}`); //?

// Insertion Sort

var insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      snapshot(nums);
      console.log(`i is ${nums[i]} and j is ${nums[j]}`);

      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
};

insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]); //?

// Quick Sort

// QuickSort
const quickSort = (nums) => {
  if (nums.length <= 1) return nums;
  const pivot = nums[nums.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

let qs = quickSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);

/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  There is a tree visualization engine that should run automatically. Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value
  
  As always, you can rename describe to xdescribe to prevent the unit tests from running and the visualization
  from displaying

*/
/*
class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }

  add(value) {
    if (value < this.value) {
      // go left
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }

      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }

      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }

    this.balance();
  }

  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    console.log(this.value, leftHeight, rightHeight);

    if (leftHeight > rightHeight + 1) {
      const leftRightHeight = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left.left ? this.left.left.height : 0;

      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }

      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      const rightRightHeight = this.right.right ? this.right.right.height : 0;
      const rightLeftHeight = this.right.left ? this.right.left.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }

      this.rotateRR();
    }
  }

  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||∏
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left.height + 1;
    } else {
      //if (!this.left || this.right.height > this.left.height)
      this.height = this.right.height + 1;
    }
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    ans.height = this.height;∏
    return ans;
  }
} */

// Functional ProgrammingP

var num = [2, 3, 4, 5, 6, 7];

const double = (num) => 2 * num;
const doubleEach = (input) => input.map(double);

const square = (num) => num * num;
const squareEach = (input) => input.map(square);

const doubleAndSquareEach = (input) => input.map(double).map(square);

/* var transform = num.map(function (no) {
  return no * no;
}); */

console.log(doubleEach(num));
console.log(squareEach(num));
console.log(doubleAndSquareEach(num));
