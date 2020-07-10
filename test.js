// Foreach loop
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
