const container = document.querySelector("#container");

// clear grid button
const button = document.createElement("button");
document.body.insertBefore(button, document.body.firstChild);
button.innerText = "Clear Grid";
button.classList.add("clear-button");

button.addEventListener("click", function () {
  container.remove("div");
  //   let gridSize = parseInt(
  //     prompt("How many squares per side in the new grid?", "")
  //   );
  //   while (gridSize > 100) {
  //     gridSize = parseInt(prompt("Set a value of 100 or less"));
  //   }

  //   // set functionality creating new grid
  //   for (let i = 0; i < gridSize * gridSize; i++) {
  //     const div = document.createElement("div");
  //     div.classList.add("square");
  //     container.append(div);
  //     div.addEventListener("mouseover", function () {
  //       div.classList.add("hover");
  //     });
  //   }
});

// container
container.classList.add("grid-container");

// divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.append(div);
  div.addEventListener("mouseover", function () {
    div.classList.add("hover");
  });
}

// add an event listener for each div that adds the hover attribute

// ISSUE with .grid-container and possibly .square in style.css: need to adjust grid column values every prompt input

// when prompting user, take input and use that number of divs as i in th for loop?
// "you should be able to enter 64 and have a brand new 64x64 grid pop up...
// without changing the totla amount of pixels used"
