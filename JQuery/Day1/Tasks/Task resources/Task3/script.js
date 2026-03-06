const firstImage = document.getElementById("img1");
const secondImage = document.getElementById("img2");
const thirdImage = document.getElementById("img3");

setInterval(function(){

    let left = parseInt(getComputedStyle(firstImage).left);
    let right = parseInt(getComputedStyle(secondImage).right);
    let bottom = parseInt(getComputedStyle(thirdImage).bottom);

    firstImage.style.left = left + 10 + "px";
    secondImage.style.right = right + 10 + "px";
    thirdImage.style.bottom = bottom + 10 + "px";

    if(left > window.innerWidth){
        firstImage.style.left = "0px";
    }

    if(right > window.innerWidth){
        secondImage.style.right = "0px";
    }

    if(bottom > window.innerHeight){
        thirdImage.style.bottom = "0px";
    }

}, 50);