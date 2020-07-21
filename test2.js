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

  // Insertion Sort

var insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        //snapshot(nums);
        console.log(`i is ${nums[i]} and j is ${nums[j]}`);
  
        if (nums[i] < nums[j]) {
          let spliced = nums.splice(i, 1);
          nums.splice(j, 0, spliced[0]);
        }
      }
    }
  };
  
  insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]); //?
  