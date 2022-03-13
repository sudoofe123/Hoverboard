const container = document.getElementById("container");

const colors = [
  "3498db",
  "e67e22",

  "#f96700",
  "orange",
  "tomato",
  "#72f900",
  "purple",
  "gray",
  "#ff0bf7",
  "aqua",
  "#e74c3c",
  "#e30c0c",
  "#280bff",
  "3498db",
  "e67e22",
];

const SQUARES = 1248;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");

  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  //   console.log(element);

  const color = getRandomColor();

  element.style.background = color;

  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
