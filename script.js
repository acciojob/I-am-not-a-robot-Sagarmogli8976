//your code here
const container = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

let images = ["img1", "img2", "img3", "img4", "img5"];
let selected = [];

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Initialize images
function init() {
  container.innerHTML = "";
  selected = [];
  para.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";

  // duplicate random image
  let randomIndex = Math.floor(Math.random() * images.length);
  let arr = [...images, images[randomIndex]];

  shuffle(arr);

  arr.forEach((cls, index) => {
    const img = document.createElement("img");
    img.classList.add(cls);
    img.dataset.id = cls;

    img.addEventListener("click", () => handleClick(img));

    container.appendChild(img);
  });
}

// Handle click
function handleClick(img) {
  if (selected.includes(img) || selected.length === 2) return;

  img.classList.add("selected");
  selected.push(img);

  resetBtn.style.display = "inline-block";

  if (selected.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}

// Verify
verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";

  if (selected[0].dataset.id === selected[1].dataset.id) {
    para.textContent = "You are a human. Congratulations!";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
});

// Reset
resetBtn.addEventListener("click", init);

// Initial load
init();