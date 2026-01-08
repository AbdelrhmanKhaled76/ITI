function getCookie (CookieName) {
    if (typeof CookieName !== "string")
        throw new TypeError("Cookie name must be a string");
    if (CookieName === "")
        throw new Error("Cookie name musn't be empty");

    let allCookies = document.cookie.split(";");
    for (let i = 0; i < allCookies.length; i++) {
        let cPair = allCookies[i].split("=");
        if (cPair[0].trim() === CookieName)
            return cPair[1].trim();
    }
    throw new Error("no Cookie found with that name");
}

function setCookie (CookieName, CookieValue, expireDate) {

    if (typeof CookieName !== "string")
        throw new TypeError("Cookie name must be a string");
    if (CookieName === "")
        throw new Error("Cookie name mustn't be empty");
    if (CookieValue === undefined)
        throw new Error("Cookie value is required");

    if (expireDate) {
        const date = new Date(expireDate).toUTCString();
        document.cookie = CookieName + '=' + CookieValue + ';expires=' + date + ';path=/';
    } else {
        document.cookie = CookieName + '=' + CookieValue + ';path=/';
    }
}

function deleteCookie(CookieName) {
    if (typeof CookieName !== "string")
        throw new TypeError("Cookie name must be a string");
    if (CookieName === "")
        throw new Error("Cookie name musn't be empty");

    const date = new Date(0).toUTCString();
    document.cookie = CookieName + "=;expires=" + date + ";path=/";
    return true;
}

function hasCookie(CookieName) {
    if (typeof CookieName !== "string")
        throw new TypeError("Cookie name must be a string");
    if (CookieName === "")
        throw new Error("Cookie name musn't be empty");
    if (arguments.length !== 1)
        throw new Error("Expected one parameter only");

    const allCookies = document.cookie.split(";");
    for (let i = 0; i < allCookies.length; i++) {
        let cPair = allCookies[i].split("=");
        if (cPair[0].trim() === CookieName) {
            return true;
        }
    }
    return false;
}

function allCookieList() {
    const allCookies = document.cookie.split(";");
    for (let i = 0; i < allCookies.length; i++) {
        let cPair = allCookies[i].split("=");
        console.log(
            "cookie name : " + cPair[0].trim() +
            " cookie value : " + (cPair[1] ? cPair[1].trim() : "")
        );
    }
}
