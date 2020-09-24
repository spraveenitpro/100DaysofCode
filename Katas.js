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

  console.log(maxset, minset, sum);
}

miniMaxSum([3, 4, 2, 5, 9]);
