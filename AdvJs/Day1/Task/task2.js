function reverse1() {
    if (arguments.length === 0) {
        console.log("There are no parameters to reverse!");
        return;
    }
    return Array.from(arguments).reverse();
}

const reverse2 = function() {
    if (arguments.length === 0) {
        console.log("There are no parameters to reverse!");
        return;
    }
    return Array.reverse.apply(Array.from(arguments));
}

console.log(reverse1(1,2,3,4)); 
console.log(reverse2(1,2,3,4)); 