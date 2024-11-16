export {imageCarousel, prevArrow, nextArrow, dotsChangeImage}

let index = 3;
const timeouts = [];

const imageCarousel = function() {
    //clear all previous timeout requests in timeout array setting it back to one timeout every 5 seconds
    for(let i = 0; i < timeouts.length; i++){
        clearTimeout(timeouts[i]);
    }
    
    //find all image divs and dots divs
    const images = document.querySelectorAll('.picture');
    console.log(images);

    const dots = document.querySelectorAll('.dot')
    console.log(dots);

    //hid all images
    for(let i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }

    //make sure all dots are grey
    dots[index].classList.remove("active");
    //increase index
    index++;
    //if index is too high or would go negative set to 0-3 always
    if(index === images.length){index = 0};
    if(index < 0){index === images.length}
    //unhide current image
    images[index].style.display = "block";
    //make current dot black
    dots[index].classList.add("active");
    
    console.log(index);
    //every 5 seconds reset function
    let timeoutId = setTimeout(imageCarousel, 5000);
    //keep track of timeouts in timeout array 
    timeouts.push(timeoutId);
}

const prevArrow = function() {
    index--;
    imageCarousel();
    console.log(index);

}

const nextArrow = function(){
    index++;
    imageCarousel();
    console.log(index);
}

const dotsChangeImage = function(slideIndex) {
    console.log(index);
    index = slideIndex; 
    imageCarousel();
}