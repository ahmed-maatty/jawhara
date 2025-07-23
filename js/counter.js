function animateCounters() {
  const counters = document.querySelectorAll(".counter h1");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-num");
    const option = counter.getAttribute("data-option") || ""; // Get the data-option or default to empty

    let start = target > 5000 ? Math.floor(target / 10000) * 10000 : 0;
    const increment = (target - start) / (4000 / 16);

    function updateCounter() {
      const current = +counter.innerText.replace(/\D/g, "");

      if (current < target) {
        counter.innerHTML = `${getOptionHTML(option)}${Math.ceil(
          current + increment
        ).toLocaleString()}`;
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerHTML = `${getOptionHTML(option)}${target.toLocaleString()}`;
      }
    }

    counter.innerHTML = `${getOptionHTML(option)}${start.toLocaleString()}`;
    requestAnimationFrame(updateCounter);
  });
}

function getOptionHTML(option) {
  if (option === "+") {
    return `<span>+</span>`;
  } else if (option === "م" || option === "m") {
    const fulloption =
      option === "م" ? `<sup>2</sup>${option}` : `${option}<sup>2</sup>`;
    return `<p style="color: #272727;">${fulloption}</p>`;
  }
  return "";
}

document.addEventListener("DOMContentLoaded", () => {
  const countersContainer = document.querySelector(".counters");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  });

  observer.observe(countersContainer);
});
