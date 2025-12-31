first part 
    const obj = {};
    
    let street = prompt("please enter street name : ");

    while(street.trim() === "" || !street)
        street = prompt("please enter a valid street name : ");
    obj.street = street;

    let buildingNum = Number(prompt("please enter a building number"));

    while(isNaN(buildingNum) || !buildingNum)
        buildingNum = Number(prompt("please enter a valid building number"));
    obj.buildingNum = buildingNum;

    let city = prompt("please enter city name : ");

    while(city.trim() === "" || !city)
        city = prompt("please enter a valid city name : ");
    obj.city = city;
    

function showAddr (addrObj){
    return  addrObj.buildingNum + " " + 
    addrObj.street + ", " + addrObj.city +
    " city" + " registered in " + new Date().toLocaleDateString()
}

console.log(showAddr(obj));


// second part
// function dispVAl(obj, str){
//     for(let key in obj){
//         if(key === str){
//             return obj[key];
//         }
//     }
//     return "didn't find it in out keys";
// }

// console.log(dispVAl({nm : "ali", age : 10}, "age"));