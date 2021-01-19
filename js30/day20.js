function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        count++;
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  console.log("Array is sorted in " + count);
  console.log("First Element is " + arr[0]);
  console.log("Last Element is " + arr[arr.length - 1]);
}

bubbleSort([4, 2, 56, 12, 5, 67, 45, 1]);
