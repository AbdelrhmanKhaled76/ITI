const usernameField = document.getElementById("username");
usernameField.addEventListener("input", function(e){
    if(e.target.value.trim() !== ""){
        this.nextElementSibling.style.visibility = 'hidden';
    }
    else {
        this.nextElementSibling.style.visibility = 'visible';
    }
})
const emailField = document.getElementById("email");
emailField.addEventListener("input", function(e){
    const email = e.target.value.trim();
    if(email !== "" &&  email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        this.nextElementSibling.style.visibility = 'hidden';
    }
    else {
        this.nextElementSibling.style.visibility = 'visible';
    }
})