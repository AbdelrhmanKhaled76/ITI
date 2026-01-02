const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
]

const imageTemplate = document.getElementById('image');

let imageIndex = 0;
let intervalClear;
imageTemplate.src = images[imageIndex];

function nextSlide(){
    if(imageIndex < images.length - 1){
        imageTemplate.src = images[++imageIndex];
    }
}

function previousSlide(){
    if(imageIndex > 0){
        imageTemplate.src = images[--imageIndex];
    }
}

function showSlider() {
    intervalClear = setInterval(() => {
        if(imageIndex === images.length -1){
            imageIndex = ++imageIndex % images.length;
            imageTemplate.src = images[imageIndex];
        }
        else {
            imageTemplate.src = images[++imageIndex];
        }
    }, 1000);
}

function stopSlider() {
    clearInterval(intervalClear);
}