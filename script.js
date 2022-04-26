// container
const container = document.querySelector("#container");
container.classList.add("grid-container");

// clear grid button
const button = document.createElement("button");
document.body.insertBefore(button, document.body.firstChild);
button.innerText = "Clear Grid";
button.classList.add("clear-button");

// build grid
function buildGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < `${size * size}`; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.append(div);
    div.addEventListener("mouseover", function () {
      div.classList.add("hover");
    });
  }
}

// set default size of 16x16
buildGrid(16);

// divs
// for (let i = 0; i < 256; i++) {
//   const div = document.createElement("div");
//   div.classList.add("square");
//   container.append(div);
//   div.addEventListener("mouseover", function () {
//     div.classList.add("hover");
//   });
// }

function newGrid() {
  container.remove("div");
  let sizeInput = parseInt(
    prompt("How many squares per side in the new grid?", "")
  );
  while (gridSize > 100) {
    sizeInput = parseInt(prompt("Set a value of 100 or less"));
  }
}

button.addEventListener("click", function () {
  // // set functionality creating new grid
  //   for (let i = 0; i < sizeInput * sizeInput; i++) {
  //     const div = document.createElement("div");
  //     div.classList.add("square");
  //     container.append(div);
  //     div.addEventListener("mouseover", function () {
  //       div.classList.add("hover");
  //     });
  // };
});

// add an event listener for each div that adds the hover attribute

// ISSUE with .grid-container and possibly .square in style.css: need to adjust grid column values every prompt input

// when prompting user, take input and use that number of divs as i in th for loop?
// "you should be able to enter 64 and have a brand new 64x64 grid pop up...
// without changing the totla amount of pixels used"
