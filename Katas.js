/*
 * Sum elements of an Array
 */

function simpleArraySum(ar) {
  let n = 0;

  for (var i = 0; i <= ar.length; i++) {
    n = n + ar[i];
    console.log(n);
  }
  return n;
}

console.log(simpleArraySum([3, 2, 14]));

/*
 *  Compare the Triplets
 *
 */

let alice = [1, 3, 3];
let bob = [0, 2, 4];
let aliceScore = 0;
let bobScore = 0;

function compareTriplets(a, b) {
  let score = [0, 0];

  for (let i = 0; i < a.length; i++)
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
  return score;
}

var result = compareTriplets(alice, bob);
console.log(result);

/**
 * Diagonal Difference
 *
 */

function diagonalDifference(arr) {
  // Write your code here
  let length = arr.length;
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < length; i++) {
    diagonal1 = diagonal1 + arr[i][i];
    diagonal2 += arr[length - 1 - i][i];
  }
  return Math.abs(diagonal1 - diagonal2);
}

var result = diagonalDifference([1, 2, 3, 4, 5, 6, 9, 8, 9]);
result;
/*
Plus Minus
*/

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      zero++;
    }
  }
  console.log(positives, negatives, zero);
  let pratio = (positives / arr.length).toFixed(6);
  let nratio = (negatives / arr.length).toFixed(6);
  let zratio = (zero / arr.length).toFixed(6);

  return [pratio, nratio, zratio];
}

console.log(plusMinus([1, 1, 0, -1, -1]));

// Staircase

// Complete the staircase function below.
function staircase(n) {
  function staircase(n) {
    for (let i = 1; i <= n; i++) {
      console.log(" ".repeat(n - i) + "#".repeat(i));
    }
  }
}

console.log(staircase(5));

// MiniMax Sun

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  arr = arr.sort();

  let maxset = arr.slice(1);
  let minset = arr.slice(0, -1);

  const sum = arr.reduce((a, total) => a + total);
  console.log(sum - arr[arr.length - 1], sum - arr[0]);
}

miniMaxSum([3, 4, 2, 5, 9]);

/** BirthDay Cake Candles
 *
 */

function birthdayCakeCandles(candles) {
  // Write your code here

  // Find the biggest value

  var max = candles.reduce(function (a, b) {
    return Math.max(a, b);
  });

  let count = 0;

  for (var i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }

  return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */
  let period = s.slice(-2);
  let hour = s.slice(0, 2);
  let min = s.slice(3, 5);
  let sec = s.slice(6, 8);
  let militaryHour = "";

  if (period === "AM") {
    if (hour == "12") {
      militaryHour = "00";
    } else {
      militaryHour = hour;
    }
  } else {
    if (hour == "12") {
      militaryHour = parseInt(hour);
    } else {
      militaryHour = parseInt(hour) + 12;
    }
  }

  // 1. 12AM becomes 00

  // 2. 1AM to 12PM ->  Do nothing

  // 3. 1PM to 11PM -> Add 12

  return militaryHour + ":" + min + ":" + sec;
}

console.log(timeConversion("01:05:45AM"));
console.log(timeConversion("07:05:45PM"));

/** Grading Students
 *
 */

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here

  for (var i = 0; i < grades.length; i++) {}

  return grades;
}

console.log(gradingStudents([84, 29, 57]));
