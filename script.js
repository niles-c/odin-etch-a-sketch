const container = document.querySelector("#container");

container.classList.add("flex-container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.append(div);
}

// apply display:flex to container
// add flex properties to divs in one class
// add class to each div via for loop
