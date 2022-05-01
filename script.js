// container
const container = document.querySelector("#container");
container.classList.add("grid-container");
const h1 = document.querySelector("h1");

// clear grid button
const button = document.createElement("button");
document.body.insertBefore(button, container);
button.innerText = "Clear Grid";
button.classList.add("clear-button");
button.addEventListener("click", newGrid);

// grid display
const h2 = document.createElement("h2");
document.body.insertBefore(h2, button);
h2.classList.add("grid-display");

// build grid
function buildGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < `${size * size}`; i++) {
    const div = document.createElement("div");
    container.append(div);
    div.addEventListener("mouseover", function () {
      div.classList.add("hover-black");
    });
  }
  h2.innerText = `Grid = ${size}x${size} `;
}

// call to set default size of 16x16
buildGrid(16);

const divTest = document.querySelectorAll("div");

// create new grid function
function newGrid() {
  let inputSize = parseInt(
    prompt("How many squares per side in the new grid?", "")
  );
  while (
    inputSize > 100 ||
    inputSize < 0 ||
    typeof inputSize !== "number" ||
    !inputSize
  ) {
    inputSize = parseInt(prompt("Enter a valid value of 100 or less"));
  }
  container.innerText = "";
  buildGrid(inputSize);
}
