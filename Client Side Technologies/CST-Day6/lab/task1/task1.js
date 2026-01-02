let message = prompt("Enter your message:");
let termination = "the window will be terminated soon...";

while(!message || message.trim() === "") {
    message = prompt("Enter a valid message:");
}

function openChildWindow() {
    let childWindow = window.open("child.html", "", "width=400,height=400");
    childWindow.focus();
    let index = 0;
    let terminationIndex = 0;
    setInterval(() => {
        if(index < message.length) {
            childWindow.document.getElementById("header").innerText += message[index];
            index++;
        }
        else if(terminationIndex < termination.length) {
            if(terminationIndex === 0) {
                childWindow.document.getElementById("header").innerText += "\n";
            }
            childWindow.document.getElementById("header").innerText += termination[terminationIndex];
            terminationIndex++;
        }
        else {
            setTimeout(() => {
                childWindow.close();
            }, 2000);
        }
    }, 100);
}