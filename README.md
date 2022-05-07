# The Odin Project - Etch-a-Sketch

This is my solution to the Etch-a-Sketch project from The Odin Project.

- [The Odin Project - Etch-a-Sketch](#the-odin-project---etch-a-sketch)
  - [The Challenge](#the-challenge)
  - [My Process](#my-process)
    - [Creating the Grid](#creating-the-grid)
    - [Clearing the Grid](#clearing-the-grid)
    - [Adding Color](#adding-color)
  - [Takeaways](#takeaways)

## The Challenge

Manipiulate the DOM to build a browser version of an Etch-a-Sketch.

I was tasked with

- Creating a webpage with a 16x16 grid of divs
- Setting a "hover" effect so that the grid divs change color when your mouse passes over them, leaving a trail through your grid
- Allowing the user to clear the grid and set a new grid size that generates in the same totla space as before
- Designing each pass through of the mouse to change a div to a completely random RGB value (optional)

## My Process

### Creating the Grid

To kick things off, I created a buildGrid function that takes one argument to set the size of the grid. I used a for loop to create and append each div to a container in my HTML file (rather than inflict the unimaginable pain of copy and pasting each div element in index.html).

To set the grid columns and rows, I gave the div container a property of display: grid in my style.css file. Within script.js, I used the style DOM method to set gridTemplateColumns and gridTemplateRows to repeat based on the argument passed to buildGrid.

I'm more familiar with CSS Flexbox than I am with CSS Grid, so I took some time to research how to set columns and rows. Through this [css-tricks article](https://css-tricks.com/introduction-fr-css-unit/), I learned about the "repeat" shorthand for grid template rows and columns, as well as the "fr" unit. The "fr" unit was especially handy for generating different grid sizes that occupy the same total space (a project requirement).

Each div that is created and appended via buildGrid has a "mouseover" event listener with a callback function, divColor, to change the backgroundcolor of the grid divs.

Additionally, each time buildGrid is called, the sizeDisplay h2 element updates to reflect the current grid size (via the innerText method) by referencing the "size" argument passed into buildGrid.

```javascript
function buildGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < `${size * size}`; i++) {
    const div = document.createElement("div");
    gridContainer.append(div);
    div.addEventListener("mouseover", divColor);
  }
  sizeDisplay.innerText = `${size}x${size} `;
}
```

I passed a value of 16 to the buildGrid function to set a default grid size.

### Clearing the Grid

My next challenge was creating the functionality to allow the user to clear the grid and set a new grid size.

The newGrid function prompts the user to set the number of squares per side in the new grid. By using a while loop, I set some limitations to ensure a valid input is received. I also set a maximum size of 100x100 divs to prevent potential crashes or freezes, and a minimum size of 16x16, as anything smaller didn't allow for an interesting grid (there isn't much room for creative freedom with a 4x4 grid, for example).

I used the innerText method to clear the grid container before calling buildGrid and passing in the user's input.

```javascript
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
```

The first button I added was "Clear Grid", which includes an event listener that calls newGrid when clicked.

### Adding Color

Next, I worked on adding color buttons. Initially, my divColor callback function for the "mouseover" event listener was simply changing the div background color to black.

To give the user more options, I added a color picker button, "random" button, and an eraser button (in addition to a black color button).

I created a global variable ("color") and set it to black. I used the divColor function to apply a background color for the divs based on the value of the "color" variable.

Creating the color picker button was challenging. I learned quickly that simply adding a "click" event on the button containing the color picker wouldn't work. Instead, I added a "change" event on the input element to set the color as the user's input (I referenced this [W3Schools article](https://www.w3schools.com/jsref/event_onchange.asp) to learn more). I added a "click" event listener on the button itself so that the user could switch to the selected color without having to change the input.

```javascript
const pickColorBtn = document.createElement("button");
btnContainer.append(pickColorBtn);
pickColorBtn.classList.add("main-button");
pickColorBtn.style.backgroundColor = "burlywood";
const input = document.createElement("input");
input.setAttribute("type", "color");
input.setAttribute("value", "#0000FF");
pickColorBtn.append(input);
input.addEventListener("change", function () {
  color = input.value;
});
pickColorBtn.addEventListener("click", function () {
  color = input.value;
});
```

For the "random" color button, I used a function referenced in a DOM manipulation exercise I completed as part of Colt Steele's Web Developer Bootcamp course on Udemy.

```javascript
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
```

My eraser button simply changes the background color of the divs to white.

## Takeaways

The project introduction made it clear in the first sentence: "this project should _not_ be easy for you." It was certainly challenging, but also extremely rewarding to flex my DOM manipulation skills.

I had to Google frequently to nail down the correct DOM methods, as well as to learn about unfamiliar concepts, such as CSS Grid. I'm much more comfortable now using Google to find solutions in articles, videos, and forum threads than when I first started as a developer. I always try to think through a problem and perform several rounds of trial and error first, but it's important to know when (and how) to seek out help.
