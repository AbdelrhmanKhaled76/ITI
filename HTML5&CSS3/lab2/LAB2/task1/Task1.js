

console.log(window.localStorage);


if (!window.localStorage) {

    window.localStorage = {
        
        setItem: function (key, value) {
            if (arguments.length !== 2)
                throw new Error("setItem needs 2 params");
            setCookie(key, value.toString());
        },
        getItem: function (key) {
            if (arguments.length !== 1)
                throw new Error("getItem needs 1 param");
            return getCookie(key);
        },
        removeItem: function (key) {
            if (arguments.length !== 1)
                throw new Error("removeItem needs 1 param");
            deleteCookie(key);
        },
        clear: function () {
            let cookies = allCookieList();
            for (let key in cookies) {
                deleteCookie(key);
            }
        },
    };
}
