function add(a,b){
    if(arguments.length !== 2)
        throw new Error("invalind number of arguments !!");
    else if(!Number(a) || !Number(b))
        throw new TypeError("inputs must be numbers !!");
    return a + b;
}