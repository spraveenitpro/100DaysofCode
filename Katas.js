/*
 * Sum elements of an Array
 */
/*
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
/*
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
*/

/**
 * Diagonal Difference
 *
 */
/*

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
/*
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
/*
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
/*
function timeConversion(s) {
  /*
   * Write your code here.
   */
/*
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

/*

function gradingStudents(grades) {
  // Write your code here

  for (var i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && (grades[i] % 5 == 3 || grades[i] % 5 == 4)) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }

  return grades;
}

console.log(gradingStudents([84, 29, 57]));

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
/*

function countingValleys(steps, path) {
  // Write your code here

  let valley = 0;
  let elevation = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] == "D") {
      elevation--;
    } else {
      if (elevation == -1) {
        valley++;
      }
      elevation++;
    }
  }

  return valley;
}

// Complete the jumpingOnClouds function below.
/*
function jumpingOnClouds(c) {
  let jumps = [];
  // Keep taking 2 jumps unless you land on a 1, then step back one.
  for (let i = 0; i < c.length + 1; i += 2) {
    if (c[i] === 1) {
      i -= 1;
    }
    jumps.push(c[i]);
  }
  return jumps.length - 1;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

// Complete the repeatedString function below.
function repeatedString(s, n) {
  let numAs = 0;

  if (n > s.length) {
    let occa = [...s].filter((e) => e === "a").length;
    numAs = Math.floor(n / s.length) * occa;
  }

  let tailString = n % s.length;

  for (var i = 0; i < tailString; i++) {
    if (s[i] === "a") {
      numAs++;
    }
  }

  return numAs;
}

console.log(repeatedString("a", 1000000000000));

/** Check common elements in an array */

/* 
1. Take 2 arrays as input.
2. take the first element of the first array and check if it occurs in the second array
3. if it does then increment a counter
4. Do this for all the elements of the first array
5. Return the counter once done
*/
/*
function checkCommonElements(arr1, arr2) {
  let counter = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(
  checkCommonElements([2, 3, 4, 5, 1, 7, 8], [6, 4, 9, 0, 2, 7, 8, 9])
);

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  var sumArr = [];
  for (var i = 0; i < arr.length - 2; i++) {
    //console.log("|" + arr[i] + "|");
    for (var j = 0; j < arr[i].length - 2; j++) {
      //console.log(arr[i][j]);

      var current_hourglass_sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      sumArr.push(current_hourglass_sum);
    }
  }

  let result = Math.max(...sumArr);
  return result;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1],
  ])
);

// Complete the rotLeft function below.
function rotLeft(a, d) {
  // 1. Shift the array to the left
  // 2. Add the shifted element to the end of array
  // 3. do that for d times

  for (var i = 1; i <= d; i++) {
    var shiftElement = a.shift();
    a.push(shiftElement);
  }

  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  var swap = 0;
  for (var i = 0; i < arr.length; i++) {
    //let current = arr[i];
    //let target = arr[arr[i] - 1];
    while (arr[i] !== i + 1) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
      swap++;
    }
  }
  return swap;
}

console.log(minimumSwaps([4, 3, 1, 2]));

// Bubble Sort:

// Complete the countSwaps function below.
function countSwaps(a) {
  let swaps = 0;
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
      }
    }
  }
  console.log("Array is sorted in " + swaps + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[a.length - 1]);
}

countSwaps([3, 2, 1]);

*/

// Complete the activityNotifications function below.
/*
function activityNotifications(expenditure, d) {
  let notices = 0;
  let medianarr = [];

  for (let i = 0; i < d + i; i++) {
    let newarr = expenditure.slice(i, d);
    medianarr.push(newarr);
  }

  console.log(medianarr);
}

activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);
*/

// const sym = (...args) => [...new Set(args.reduce(diff))];

// const diff = (arr1, arr2) => [
//   ...arr1.filter((e) => !arr2.includes(e)),
//   ...arr2.filter((e) => !arr1.includes(e)),
// ];
-(
  // sym([1, 2, 3], [5, 2, 1, 4]);