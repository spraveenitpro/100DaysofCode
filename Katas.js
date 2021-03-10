/// New Year Chaos

function minimumBribes(q) {
  const too_chaotic = "Too chaotic";
  let total = 0;

  for (let current_pos = 0; current_pos < q.length; current_pos++) {
    let original_pos = q[current_pos] - 1;

    const diff = original_pos - current_pos;

    if (diff > 2) {
      console.log(too_chaotic);
    }

    if (diff <= 0) {
      for (let i = Math.max(0, original_pos - 1); i < current_pos; i++) {
        const start_pos_forward_person = q[i] - 1;
        if (start_pos_forward_person > original_pos) {
          total++;
        }
      }
    }
  }

  console.log(total);
}

minimumBribes([2, 1, 5, 3, 4]);

// Array Manipulation

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  const acc = {};
  for (const [a, b, k] of queries) {
    acc[a] = (acc[a] || 0) + k;
    acc[b + 1] = (acc[b + 1] || 0) - k;
    console.log(acc);
  }

  let last = 0;
  let m = 0;

  for (let i = 1; i < n + 1; i++) {
    const curr = acc[i] || 0;

    last = last + curr;

    if (last > m) {
      m = last;
    }
  }

  return m;
}

console.log(
  arrayManipulation(10, [
    [1, 2, 3],
    [4, 5, 7],
    [2, 2, 1],
  ])
);
