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

// build grid
function buildGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < `${size * size}`; i++) {
    const div = document.createElement("div");
    container.append(div);
    div.addEventListener("mouseover", function () {
      div.classList.add("hover");
    });
  }
}

// set default size of 16x16
buildGrid(16);

// create new grid function
function newGrid() {
  let inputSize = parseInt(
    prompt("How many squares per side in the new grid?", "")
  );
  console.log(inputSize);
  while (
    inputSize > 100 ||
    inputSize < 0 ||
    typeof inputSize !== "number" ||
    !inputSize
  ) {
    inputSize = parseInt(prompt("Enter a valid value of 100 or less"));
  }
  console.log(inputSize);
  container.innerText = "";
  buildGrid(inputSize);
}
