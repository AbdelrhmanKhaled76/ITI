const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {

    const nameField = document.getElementById("name");
    const genderField = document.querySelector('input[name="gender"]:checked');
    const colorField = document.getElementById("color");

    if (!genderField) {
        alert("Please select gender");
        return;
    }

    const userName = nameField.value.trim();
    const visitCookieName = "visit_" + userName;

    const pictureString = genderField.value + '.jpg';

    if (hasCookie(visitCookieName)) {
        let counter = parseInt(getCookie(visitCookieName), 10);
        setCookie(visitCookieName, ++counter);
    } else {
        setCookie(visitCookieName, 1);
    }

    setCookie("gender", pictureString);
    setCookie("name", userName);
    setCookie("color", colorField.value);

    location.replace("profile.html");
});
