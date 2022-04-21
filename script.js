const container = document.querySelector("#container");

container.classList.add("flex-container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.append(div);
  div.addEventListener("mouseover", function () {
    div.classList.add("hover");
  });
}

// add an event listener for each div that adds the hover attribute

// what should happen:
// -mouse hovers over div and the div changes color (and keeps that color, unless hovered over again(?))
// -MDN: "movement in and out of an element"
// -mouseover (bubbling?), mouseenter, mouseleave
