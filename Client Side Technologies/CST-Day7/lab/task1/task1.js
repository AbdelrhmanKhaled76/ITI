document.body.oncontextmenu = function(event){
    console.log(event);
    event.preventDefault();
}

document.getElementById("form").onsubmit = function(event){
    let confirmation = confirm("do you want to submit ??");
    if(!confirmation){
        event.preventDefault();
    }
}

let custEvent = new Event("custEvent");

let nameBool = false;
let emailBool = false;
let phoneBool = false;


window.addEventListener("custEvent", function () {
    console.log("my custom event fired");
});


document.getElementById("name").addEventListener("input", function(event){
    if(event.target.value !== ""){
        nameBool = true;
    }
});

document.getElementById("email").addEventListener("input", function(event){
    if(event.target.value !== ""){
        emailBool = true;
    }
});

document.getElementById("phone").addEventListener("input", function(event){
    if(event.target.value !== ""){
        phoneBool = true;
    }
});


setTimeout(function(){
    if(!nameBool && !emailBool && !phoneBool){
        window.dispatchEvent(custEvent);
    }
}, 30000)
