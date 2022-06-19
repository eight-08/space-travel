function moon() {
    document.getElementById("planet-img").src = 'assets/image-moon.png';
    document.getElementById("planet-title").innerHTML = "MOON";
    document.getElementById("planet-content").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    document.getElementById("planet-stat-dist").innerHTML = "384,400 KM";
    document.getElementById("planet-stat-est").innerHTML = "3 DAYS";
}

function mars() {
    document.getElementById("planet-img").src = 'assets/image-mars.png';
    document.getElementById("planet-title").innerHTML = "MARS";
    document.getElementById("planet-content").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    document.getElementById("planet-stat-dist").innerHTML = "225 MIL. KM";
    document.getElementById("planet-stat-est").innerHTML = "9 MONTHS";
    
}

function europa() {
    document.getElementById("planet-img").src = 'assets/image-europa.png';
    document.getElementById("planet-title").innerHTML = "EUROPA";
    document.getElementById("planet-content").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    document.getElementById("planet-stat-dist").innerHTML = "628 MIL. KM";
    document.getElementById("planet-stat-est").innerHTML = "3 YEARS";
}

function titan() {
    document.getElementById("planet-img").src = 'assets/image-titan.png';
    document.getElementById("planet-title").innerHTML = "TITAN";
    document.getElementById("planet-content").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementById("planet-stat-dist").innerHTML = "1.6 BIL. KM";
    document.getElementById("planet-stat-est").innerHTML = "7 YEARS";
}


    // Get the container element
var btnContainer = document.getElementById("content-nav");

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



