function add(a,b){
    if(arguments.length !== 2)
        throw new Error("invalind number of arguments !!");
    return a + b;
}

// function add(){
//     let additionResult = 0;
//     for(let i = 0; i < arguments.length; i++){
//         if(typeof arguments[i] !== "number")
//             throw new TypeError("only number type is valid !!");
//         additionResult += Number(arguments[i]);
//     }
//     return additionResult;
// }
console.log(add(1,3));