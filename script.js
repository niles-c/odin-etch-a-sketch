// set initial div color
let color = "black";

// container
// const gridContainer = document.querySelector("#container");
// gridContainer.classList.add("grid-container");
// const h1 = document.querySelector("h1");

// button container
const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");
document.body.insertBefore(btnContainer, container);

// clear grid button
const clearBtn = document.createElement("button");
btnContainer.append(clearBtn);
clearBtn.innerText = "Clear Grid";
clearBtn.classList.add("clear-button");
clearBtn.addEventListener("click", newGrid);

// black color button
const blackBtn = document.createElement("button");
btnContainer.append(blackBtn);
blackBtn.innerText = "Black";
blackBtn.classList.add("black-button");
blackBtn.addEventListener("click", function () {
  color = "black";
});

// rainbow color button
const rainbowBtn = document.createElement("button");
btnContainer.append(rainbowBtn);
rainbowBtn.innerText = "Rainbow";
rainbowBtn.classList.add("rainbow-button");
rainbowBtn.addEventListener("click", function () {
  color = "random";
});

// pick color button
const pickColorBtn = document.createElement("button");
btnContainer.append(pickColorBtn);
pickColorBtn.innerText = "Pick";
pickColorBtn.classList.add("pick-button");

// grid display
const sizeDisplay = document.createElement("h2");
document.body.append(sizeDisplay);
sizeDisplay.classList.add("size-display");

// random color function
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// build grid
function buildGrid(size) {
  const gridContainer = document.querySelector("#container");
  gridContainer.classList.add("grid-container");
  const h1 = document.querySelector("h1");
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < `${size * size}`; i++) {
    const div = document.createElement("div");
    gridContainer.append(div);
    div.addEventListener("mouseover", divColor);
  }
  sizeDisplay.innerText = `${size}x${size} `;
}

// call to set default size of 16x16
buildGrid(16);

// create new grid function
function newGrid() {
  let inputSize = parseInt(
    prompt("How many squares per side in the new grid?", "")
  );
  while (
    inputSize > 100 ||
    inputSize < 16 ||
    typeof inputSize !== "number" ||
    !inputSize
  ) {
    inputSize = parseInt(prompt("Enter a value between 16 and 100"));
  }
  gridContainer.innerText = "";
  buildGrid(inputSize);
}

// change div color function
function divColor() {
  if (color === "random") {
    this.style.backgroundColor = randomColor();
  } else {
    this.style.backgroundColor = color;
  }
}
