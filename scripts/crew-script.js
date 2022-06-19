function douglas() {
    document.getElementById("crew-title").innerHTML = "COMMANDER";
    document.getElementById("crew-name").innerHTML = "DOUGLAS HURLEY";
    document.getElementById("crew-desc").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    document.getElementById("image").src = "assets/image-douglas-hurley.png";
}

function shuttleworth() {
    document.getElementById("crew-title").innerHTML = "MISSION SPECIALIST";
    document.getElementById("crew-name").innerHTML = "MARK SHUTTLEWORTH";
    document.getElementById("crew-desc").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    document.getElementById("image").src = "assets/image-mark-shuttleworth.png";
}

function glover() {
    document.getElementById("crew-title").innerHTML = "PILOT";
    document.getElementById("crew-name").innerHTML = "VICTOR GLOVER";
    document.getElementById("crew-desc").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    document.getElementById("image").src = "assets/image-victor-glover.png";
}

function anousheh() {
    document.getElementById("crew-title").innerHTML = "FLIGHT ENGINEER";
    document.getElementById("crew-name").innerHTML = "ANOUSHEH ANSARI";
    document.getElementById("crew-desc").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    document.getElementById("image").src = "assets/image-anousheh-ansari.png";
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