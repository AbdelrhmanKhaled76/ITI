const arr = [];
let size = Number(prompt("Enter a number to specify a size for the Array"));

while(isNaN(size) || !size){
    size = Number(prompt("please enter a valid size !"));
}

for(let i=0; i < size; i++ ){
    let value = Number(prompt("enter the " + (i+1) + " number for the array"));
    while(isNaN(value) || !value){
        prompt("please enter a valid size !");
    }
    arr.push(value);
}

console.log("this is the original array : ", arr);

arr.sort(function(a, b){
    return a-b;
})

console.log("the ascending sorted version : ", arr);


arr.sort(function(a, b){
    return b-a;
})

console.log("the ascending sorted version : ", arr);