/* Selection Sort
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
    }
  }
  return arr;
}

console.log(selectionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
