const marbleContainer = document.getElementById('marble-container');
const marbles = document.getElementsByClassName('marble');
let index = 0;
let stopAnimation = false;
setInterval(function() {
    if(!stopAnimation){
        if(index !== 0)
            marbles[index - 1].src = 'marble1.jpg'
        if(index >= marbles.length) {
            index = 0;
        }
        marbles[index++].src = 'marble3.jpg';
    }
}, 1000);

marbleContainer.onmouseover = function() {
    stopAnimation = true;
}

marbleContainer.onmouseleave = function() {
    stopAnimation = false;
}
