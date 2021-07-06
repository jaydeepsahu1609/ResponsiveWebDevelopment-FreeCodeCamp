let toggleClicked = false; //toggle not clicked
let nav = document.getElementById('navbar');
let toggle = document.getElementById("toggle");
let bars = document.getElementsByClassName('bars');
let links = document.getElementById("links");
let linksBtn = document.getElementsByClassName("linksBtn");




function toggleClick() {
    //when toggle is clicked make links visible but in flex-column style, color the toggle-bars to red
    if (!toggleClicked) {
        toggleClicked = true;

        links.classList.remove('linksHidden');
        links.classList.add('linksDisplay');
        links.style.width = "100vw";

        navbar.classList.remove("navLargeDevice");
        navbar.classList.add("navSmallDevice");


        for (let i = 0; i < bars.length; i++) {
            bars[i].classList.remove('bars-white');
            bars[i].classList.add('bars-red');
        }

        for (let i = 0; i < linksBtn.length; i++) {
            linksBtn[i].style.width = "80vw";
        }
    } else {
        //when toggle is clicked again hide the links, reset the color of bars
        toggleClicked = false;

        links.classList.remove('linksDisplay');
        links.classList.add('linksHidden');
        links.style.width = "auto";

        navbar.classList.add("navLargeDevice");
        navbar.classList.remove("navSmallDevice");


        for (let i = 0; i < bars.length; i++) {
            bars[i].classList.add('bars-white');
            bars[i].classList.remove('bars-red');
        }

        for (let i = 0; i < linksBtn.length; i++) {
            linksBtn[i].style.width = "auto";
        }
    }

};


//CHANGING THE NAVABAR VIEW ACCORDING TO THE WINDOW SIZE
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        //LARGE DEVICE

        if (links.classList.contains("linksHidden"))
            links.classList.remove("linksHidden");

        else if (toggleClicked) {
            //WINDOW RESIZED WHEN TOGGLE WAS ALREADY CLICKED
            toggleClick(); //PERFORM UNCLICKING OF TOGGLE

            links.classList.remove("linksHidden"); //RESET
            links.classList.remove("linksDisplay"); //RESET

        }
    } else {
        //SMALL DEVICE
        if (!links.classList.contains("linksDisplay") && !toggleClicked)
        //WINDOW SIZE WAS REDUCED WHILE TOGGLE WAS NOT CLICKED
        //& LINKS CLASS WAS NOT VISIBLE
            links.classList.add("linksHidden"); //HIDE THE LINKS CLASS
    }
});



//CHANGE NAVBAR OPACITY WHEN WINDOW SCROLLED
// window.addEventListener("scroll", () => {
//     if (scrollY > 30) {
//         document.getElementById('navbar').style.opacity = 1;
//     } else {
//         document.getElementById('navbar').style.opacity = 0.9;
//     }
// });