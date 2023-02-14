var input = true;
function sideBar() {
  if (input == true) {
    document.getElementById("side-bar").style.display = "block";
    input = false;
    console.log(input);
  } else {
    document.getElementById("side-bar").style.display = "none";
    console.log(input);
    input = true;
  }
}
// type js
var options = {
  strings: ["Adding Moments of life.", "Say cheese"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
};

var typed = new Typed(".auto-type", options);

// product info model update function
function getProductInfo(type) {
  console.log(type);
  switch (type) {
    case 1:
      document.getElementById(
        "exampleModalLabel"
      ).innerText = `Wedding Photography`;
      break;
    case 2:
      document.getElementById(
        "exampleModalLabel"
      ).innerText = `Event Photography`;
      break;
    case 3:
      document.getElementById(
        "exampleModalLabel"
      ).innerText = `Travel Photography`;
      break;
    case 4:
      document.getElementById(
        "exampleModalLabel"
      ).innerText = `Official Photography`;
      break;

    default:
      break;
  }
}
