let links = document.querySelectorAll(".link");

links.forEach((e) => {
  e.addEventListener("click", () => {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

let drop = document.querySelectorAll(".drop");

drop.forEach((e) => {
  e.addEventListener("click", () => {
    drop.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.toggle("active");
  });
});

let closer = document.querySelectorAll("#closer");
let closer2 = document.querySelector("#closer2");

if (closer) {
  closer.forEach((e) => {
    e.addEventListener("click", () => {
      let p_drop = e.parentElement;
      let p_link = e.parentElement.firstElementChild;
      setTimeout(() => {
        p_drop.classList.remove("active");
      }, 10);
      p_link.classList.remove("active");
    });
  });
}
if (closer2) {
  closer2.addEventListener("click", () => {
    let p_drop = closer2.parentElement;
    let p_link = closer2.parentElement.firstElementChild.nextElementSibling;
    setTimeout(() => {
      p_drop.classList.remove("active");
    }, 10);
    p_link.classList.remove("active");
  });
}

function closeLang() {
  let p_drop = closer2.parentElement;
  let p_link = closer2.parentElement.firstElementChild.nextElementSibling;
  setTimeout(() => {
    p_drop.classList.remove("active");
  }, 10);
  p_link.classList.remove("active");
}

const select = document.querySelector(".custom-select");
const selected = select.querySelector(".selected-option");
const optionsList = select.querySelector(".options-list");
const input = document.getElementById("countryInput");

selected.addEventListener("click", () => {
  optionsList.style.display =
    optionsList.style.display === "block" ? "none" : "block";
});

optionsList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (li) {
    const img = li.querySelector("img").src;
    const text = li.querySelector("span").textContent;
    const value = li.dataset.value;

    selected.innerHTML = `<img src="${img}" alt="" /><span>${text}</span>`;
    input.value = value;
    optionsList.style.display = "none";
  }
});

let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
  if (closer2) {
    closeLang();
  }
});

let homeMedia = document.getElementById("homeMedia");
if (homeMedia) {
  homeMedia.addEventListener("click", () => {
    homeMedia.classList.toggle("active");
  });

  if (window.innerWidth <= 421) {
    homeMedia.addEventListener("mouseleave", () => {
      homeMedia.classList.remove("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".product-card").forEach((product) => {
    const addBtn = product.querySelector(".add");
    const minusBtn = product.querySelector(".minus");
    const quantityInput = product.querySelector(".quantity");

    if (addBtn && minusBtn && quantityInput) {
      addBtn.addEventListener("click", () => {
        let current = parseInt(quantityInput.value) || 0;
        quantityInput.value = current + 1;
      });

      minusBtn.addEventListener("click", () => {
        let current = parseInt(quantityInput.value) || 0;
        if (current > 1) {
          quantityInput.value = current - 1;
        }
      });
    } else {
      console.warn("Missing one or more controls in product-cat:", product);
    }
  });
});

/* New Edits */
document.addEventListener("DOMContentLoaded", function () {

  const productPagenumber = document.querySelectorAll(
    ".product-pagination .products-page-number .page-number"
  );

  const prevBtnPage = document.getElementById("pagination-prev-page");
  const nextBtnPage = document.getElementById("pagination-next-page");

  productPagenumber.forEach((pn, index) => {
    pn.onclick = () => {
      setActive(productPagenumber, index);
    };
  });

  if(prevBtnPage){
    prevBtnPage.onclick = () => {
      const currentIndex = getActiveIndex(productPagenumber);
      if (currentIndex > 0) {
        setActive(productPagenumber, currentIndex - 1);
      }
    };
  }

  if(nextBtnPage){
    nextBtnPage.onclick = () => {
      const currentIndex = getActiveIndex(productPagenumber);
      if (currentIndex < productPagenumber.length - 1) {
        setActive(productPagenumber, currentIndex + 1);
      }
    };
  }


  const productImgNum = document.querySelectorAll(".product-img-pagination input");
  const nextProductImg = document.getElementById("myproduct-img-next");
  const prevProductImg = document.getElementById("myproduct-img-prev");

  productImgNum.forEach((pn, index) => {
    pn.onclick = () => {
      setActive(productImgNum, index);
    };
  });

  if(nextProductImg){
    nextProductImg.onclick = () => {
      console.log(prevProductImg)
      const currentIndex = getActiveIndex(productImgNum);
      if (currentIndex > 0) {
        setActive(productImgNum, currentIndex - 1);
      }
    };
  }

  if(prevProductImg){
    prevProductImg.onclick = () => {
      console.log(nextProductImg)
      const currentIndex = getActiveIndex(productImgNum);
      if (currentIndex < productImgNum.length - 1) {
        setActive(productImgNum, currentIndex + 1);
      }
    };
  }

  function getActiveIndex(elements) {
    return Array.from(elements).findIndex((el) => el.classList.contains("active"));
  }

  function setActive(elements, newIndex) {
    elements.forEach((el) => el.classList.remove("active"));
    elements[newIndex].classList.add("active");
  }
});

const slider = document.querySelector(".range-slider");
const progress = slider.querySelector(".progress");
const minPriceInput = slider.querySelector(".min-price");
const maxPriceInput = slider.querySelector(".max-price");
const minInput = slider.querySelector(".min-input");
const maxInput = slider.querySelector(".max-input");

const updateProgress = () => {
  const minValue = parseInt(minInput.value);
  const maxValue = parseInt(maxInput.value);

  const range = maxInput.max - minInput.min;
  const valueRange = maxValue - minValue;
  const width = (valueRange / range) * 100;
  const minOffset = ((minValue - minInput.min) / range) * 100;

  progress.style.width = width + "%";
  progress.style.left = minOffset + "%";

  minPriceInput.value = minValue;
  maxPriceInput.value = maxValue;
};

const updateRange = (event) => {
  const input = event.target;

  let min = parseInt(minPriceInput.value);
  let max = parseInt(maxPriceInput.value);

  if (input === minPriceInput && min > max) {
    max = min;
    maxPriceInput.value = max;
  } else if (input === maxPriceInput && max < min) {
    min = max;
    minPriceInput.value = min;
  }

  minInput.value = min;
  maxInput.value = max;

  updateProgress();
};

minPriceInput.addEventListener("input", updateRange);
maxPriceInput.addEventListener("input", updateRange);

minInput.addEventListener("input", () => {
  if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
    maxInput.value = minInput.value;
  }
  updateProgress();
});

maxInput.addEventListener("input", () => {
  if (parseInt(maxInput.value) <= parseInt(minInput.value)) {
    minInput.value = maxInput.value;
  }
  updateProgress();
});

let isDragging = false;
let startOffsetX;

progress.addEventListener("mousedown", (e) => {
  e.preventDefault();

  isDragging = true;

  startOffsetX = e.clientX - progress.getBoundingClientRect().left;

  slider.classList.toggle("dragging", isDragging);
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const sliderRect = slider.getBoundingClientRect();
    const progressWidth = parseFloat(progress.style.width || 0);

    let newLeft =
      ((e.clientX - sliderRect.left - startOffsetX) / sliderRect.width) * 100;

    newLeft = Math.min(Math.max(newLeft, 0), 100 - progressWidth);

    progress.style.left = newLeft + "%";

    const range = maxInput.max - minInput.min;
    const newMin = Math.round((newLeft / 100) * range) + parseInt(minInput.min);
    const newMax = newMin + parseInt(maxInput.value) - parseInt(minInput.value);

    minInput.value = newMin;
    maxInput.value = newMax;

    updateProgress();
  }
  slider.classList.toggle("dragging", isDragging);
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
  }
  slider.classList.toggle("dragging", isDragging);
});

updateProgress();