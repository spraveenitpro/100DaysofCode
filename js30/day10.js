function dec2bin(n) {
  let myArray = parseInt(n, 10).toString(2).split("");
  let counter = 0;
  let maximum = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] == 1) {
      counter++;
    } else if (myArray[i] == 0) {
      if (counter > maximum) {
        maximum = counter;
      }
      counter = 0;
    }
  }
  if (counter > maximum) {
    maximum = counter;
  }

  console.log(maximum);
}
