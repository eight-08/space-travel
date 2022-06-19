function circle1() {
    document.getElementById("slider-mover").style.top = "248px";

    document.getElementById("launch-vehicle").style.opacity = "100%";
    document.getElementById("spaceport").style.opacity = "0";
    document.getElementById("space-capsule").style.opacity = "0";

}

function circle2() {
    document.getElementById("slider-mover").style.top = "345px";

    document.getElementById("launch-vehicle").style.opacity = "0";
    document.getElementById("spaceport").style.opacity = "100%";
    document.getElementById("space-capsule").style.opacity = "0";
}

function circle3() {
    document.getElementById("slider-mover").style.top = "440px";

    document.getElementById("launch-vehicle").style.opacity = "0";
    document.getElementById("spaceport").style.opacity = "0";
    document.getElementById("space-capsule").style.opacity = "100%";
}

    // Get the container element
var btnContainer = document.getElementById("slider-box");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


