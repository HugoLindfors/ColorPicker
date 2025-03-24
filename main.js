const htmlNewColorButton = document.getElementById("new-color-button");
const htmlHexCodeDisplay = document.getElementById("hex-code-display");
const htmlRgbCodeDisplay = document.getElementById("rgb-code-display");

htmlNewColorButton.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const redHex = red.toString(16).padStart(2, '0').toUpperCase();
  const greenHex = green.toString(16).padStart(2, '0').toUpperCase();
  const blueHex = blue.toString(16).padStart(2, '0').toUpperCase();

  const hexCode = `#${redHex}${greenHex}${blueHex}`;
  const rgbCode = `(${red}, ${green}, ${blue})`;

  htmlHexCodeDisplay.innerHTML = hexCode;
  htmlRgbCodeDisplay.innerHTML = rgbCode;

  document.body.style.backgroundColor = hexCode;
});