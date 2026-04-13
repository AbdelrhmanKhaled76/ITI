const obj = {
    name: "Ahmed",
    address: "Cairo",
    age: 10
};

const handler = {
    get: (target, prop) => {
        const value = target[prop];

        if (prop === "name") {
            if (value.length < 7) {
                return "Name is too short";
            }
        }

        if (prop === "address") {
            if (typeof value !== "string") {
                return "Address is not a string";
            }
        }

        if (prop === "age") {
            if (value < 25 || value > 60) {
                return "Age is out of range";
            }
        }

        return value;
    }
};

const proxy = new Proxy(obj, handler);

console.log(proxy.age);     // "Age is out of range"
console.log(proxy.name);    // "Name is too short" (Ahmed is 5 chars)
console.log(proxy.address); // "Cairo"