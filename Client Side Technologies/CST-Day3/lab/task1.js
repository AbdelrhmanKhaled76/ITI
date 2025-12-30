let message = prompt("Please enter a message:");
if(!message) {
    document.write("default message");
}
else {
    for(let i = 0; i < 6; i++) {
        document.write("<h" + (i+1) + ">" + message + "</h" + (i+1) + ">" + "<br>");
    }
}
console.log(message);