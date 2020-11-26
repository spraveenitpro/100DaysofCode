const arr = [1, 4, 3, 2];
const n = 4;
let newArr = [];

for (let i = n - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

console.log(newArr.join(" "));
