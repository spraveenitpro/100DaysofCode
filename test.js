// function findLongestWordLength(str) {
//   const words = str.split(" ");
//   const newArr = [];
//   for (var i = 0; i < words.length; i++) {
//     newArr.push(words[i].length);
//   }
//   return Math.max(...newArr);
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

// function largestOfFour(arr) {
//   const newArr =[];
//   for (var i =0; i < arr.length; i++) {
//     var tempArr = arr[i];
//     newArr.push(Math.max(...tempArr) )
//   }
//   return newArr;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// function confirmEnding(str, target) {

//   if (str.slice(str.length - target.length) === target) {
//     return true;
//   }

// }

// console.log(confirmEnding("Bastian", "n"));

// function repeatStringNumTimes(str, num) {
//   var newval = "";

//   for (let i = 1; i <= num; i++) {
//     newval = newval.concat("", str);
//   }
//   return newval;
// }

// console.log(repeatStringNumTimes("abc", 3));

// function truncateString(str, num) {
//   if(str.length > num) {
//     return str.slice(0, num).concat("","...")
//   } else {
//     return str.slice(0, num)
//   }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

// function findElement(arr, func) {
//   let num = 0;
//   for (var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// function titleCase(str) {
// var convertToArray = str.toLowerCase().split(" ");
// var result = convertToArray.map(function(val) {
//   return val.replace(val.charAt(0),val.charAt(0).toUpperCase())
// })

// return result.join( " ");
// }

// console.log(titleCase("I'm a little tea pot"));

// function frankenSplice( arr1, arr2, n) {

//   let localArr = arr2.slice();
//   localArr.splice(n,0, ...arr1);
//   return localArr
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function bouncer(arr) {

//   var newArr= [];

//   for (let i = 0; i< arr.length; i++) {
//     if (arr[i]) {
//       newArr.push(arr[i])
//     }

//   }
//   return newArr;

// }

// console.log(bouncer([7, "ate", "", false, 9]));

// var arr = [23,12,1,34,21,2];

// console.log(arr.sort(function(a,b) {
//   return a-b;
// }));

// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();

//   for (var i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }
// console.log(mutation(["Mary", "army"]));


function chunkArrayInGroups(arr, size) {
  var newArr = [];

  for (var i = 0; i < arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }

  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
