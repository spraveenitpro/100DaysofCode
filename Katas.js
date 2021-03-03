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
