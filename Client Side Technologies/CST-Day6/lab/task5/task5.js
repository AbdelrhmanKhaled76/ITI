const cards = document.getElementsByClassName('cards');
const defaultImage = 'Moon.gif';
let matchedPairs = 0;
let clickedImages = [];

let activeGallery = Array.from([
    '1.gif','2.gif','3.gif','4.gif','5.gif','6.gif',
    '1.gif','2.gif','3.gif','4.gif','5.gif','6.gif'
]);

let availabilty = Array.from({length : activeGallery.length},(_,i)=>true)

for(let i = 0; i < activeGallery.length; i++){
    let temp = activeGallery[i];
    let j = Math.floor(Math.random() * activeGallery.length);
    activeGallery[i] = activeGallery[j];
    activeGallery[j] = temp;   
}

function clickedImage(image, index) {

    if (!availabilty[index] || clickedImages.length === 2 || clickedImages.includes(index)) return;


    image.src = activeGallery[index];
    clickedImages.push(index);

    if (clickedImages.length === 2) {
        const first = clickedImages[0];
        const second = clickedImages[1];

        availabilty[first] = false;
        availabilty[second] = false;

        setTimeout(() => {
            if(activeGallery[first] === activeGallery[second]){
                matchedPairs++;

                if (matchedPairs === activeGallery.length / 2) {
                    alert("🎉 You won!");
                }
            }
            else {  
                cards[first].src = defaultImage;
                cards[second].src = defaultImage;

                availabilty[first] = true;
                availabilty[second] = true;
            }

            clickedImages = [];
        }, 800);
    }
}
