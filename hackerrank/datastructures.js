// Print an Array

var scores = new Array(90, 34, 12, 11, 56, 86, 43, 22);

for (var i = 0; i < scores.length; i++) {
  //console.log(scores[i] + "\n");
}

// Maximum Value in an array

function max(arrays) {
  for (var i = 0; i < arrays.length - 1; i++) {
    if (arrays[i] > arrays[i + 1]) {
      var temp = arrays[i];
      arrays[i] = arrays[i + 1];
      arrays[i + 1] = temp;
    }
  }
  var maxValue = scores[scores.length - 1];
  return maxValue;
}

//console.log(max(scores));

// Bubble Sort

class BubbleSort {
  static sort(arrays) {
    for (var i = 0; i <= arrays.length; i++) {
      for (var j = 0; j < arrays.length; j++) {
        if (arrays[j] > arrays[j + 1]) {
          let temp = arrays[j];
          arrays[j] = arrays[j + 1];
          arrays[j + 1] = temp;
        }
      }
    }
  }
}

var scores = [60, 50, 95, 80, 70];
BubbleSort.sort(scores);

for (var i = 0; i < scores.length; i++) {
  console.log(scores[i] + "\n");
}

// Minimum value in an array

function min(arrays) {
  var minIndex = 0;
  for (let j = 1; j < arrays.length; j++) {
    if (arrays[minIndex] > arrays[j]) {
      minIndex = j;
    }
  }
  return arrays[minIndex];
}


console.log (min(scores));