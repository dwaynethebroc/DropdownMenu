import "./styles.css";
import { menu, closeMenu } from "./dropdown.js";
import { imageCarousel, prevArrow, nextArrow, dotsChangeImage } from "./imageCarousel.js";

//Dropdown code

const icon = document.getElementById('burger');
icon.addEventListener('click', menu)

const listItems = document.querySelectorAll('.dropdown-option');
listItems.forEach(item => item.addEventListener('click', closeMenu))

//Carousel Code

imageCarousel();

const prevArrowLogo = document.querySelector(".prev");
prevArrowLogo.addEventListener('click', prevArrow);

const nextArrowLogo = document.querySelector(".next")
nextArrowLogo.addEventListener('click', nextArrow);

const dots = document.querySelectorAll('span.dot');
console.log(dots);

for(let i=0; i<dots.length; i++) {
    dots[i].addEventListener('click', dotsChangeImage(i))
}



