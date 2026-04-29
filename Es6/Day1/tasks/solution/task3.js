var fruits = ["apple", "strawberry", "banana", "orange", "mango"];


function allString(arr){
    return arr.every(el => typeof el === 'string');
};

function someStartWithA(arr){
    return arr.some(el => el.startsWith('a'));
}

function filteredBandS(arr){
    return arr.filter(el => el.startsWith('b') || el.startsWith('s'))
}

function iLoveFruits(arr){
    return arr.map(el => "i love " + el);
}

console.log(allString(fruits));
console.log(someStartWithA(fruits));
console.log(filteredBandS(fruits));

const newArr = iLoveFruits(fruits);

newArr.forEach(el => {
    console.log(el);
})