// document.body.addEventListener("keydown", function(event){
//     console.log(event);
// })

// document.body.addEventListener("keypress", function(event){
//     console.log(event);
// })

// document.body.addEventListener("keyup", function(event){
//     console.log(event);
// })

document.body.addEventListener("keydown", function(event){
    // console.log("physical key : " + event.code);
    // console.log("printed : " + event.key);
    console.log(event.key);
    if(event.key === "s" && event.ctrlKey){
        console.log("not allowed !!");
        event.preventDefault();
    }
})