const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      setInterval(updateCounter, 100);
    } else {
      counter.innerText = target;
    }
    console.log(increment);
  };
  updateCounter();
});
