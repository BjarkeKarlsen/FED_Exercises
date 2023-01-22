import Sailboat from "/js/Sailboat-v4.js";

//Adjust image to render on site

function adjustimage() {
  document.getElementById("sailboat").height = window.innerHeight - 20;
}

//call function
adjustimage();

//when resizing call the function that calls adjustimage.
window.onresize = function () {
  adjustimage();
};

//make new object sailboat

var ship = new Sailboat();

//hook input to function
document
  .getElementById("calculateHullSpeed")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // For Sailboat-v2 and -v3
    ship.name = document.getElementById("name").value;
    ship.length = parseInt(document.getElementById("length").value);
    console.log(ship._name);
    console.log(ship._length); // Should write "undefined" if _length is private
    document.getElementById("result").value = ship.hullspeed().toFixed(1);
  });
