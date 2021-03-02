const s = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 4],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(s) {
  for (var i = 0; i < s.length - 2; i++) {
    for (var j = 0; j < s[i].length - 2; j++) {
      console.log(i, j);
    }
  }
}
