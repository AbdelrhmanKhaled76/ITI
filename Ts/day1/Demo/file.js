"use strict";
// class Test{}
/**String,Number,Boolean */
let a1 = 1;
// a1 = "str"
// a1 = true
console.log(a1);
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(1, 2));
// console.log(add(true,true))
// console.log(add(true,"str"))
let a3 = 1;
a3 = 2;
// a3="bbb"
let x;
// x=1
// x="test"
// x=true
// x= [1,2,3]
x = 5;
// x.forEach(elem=>{
//     console.log(elem)
// })
x = "str";
function varCheck(arg) {
    if (arg > 10) {
        if (arg > 5) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "data" + arg;
    }
}
let o1 = varCheck(1);
// o1 = true
// o1="aaa"
// o1=5
/**---------------------------------------------------------- */
//Array
// let arr:number|string[] = ['str','dff']
let arr = [4, 5, 6];
function printArray(arg) {
    arg.forEach(elem => {
        console.log(elem);
    });
}
// printArray(arr)
// printArray(27)
//tuple
// let myArr:[number,number,number]=[1,2,3]
/**-------------------------------------------------- */
//Object
let user1 = {
    name: "ahmed",
    age: 20,
    courses: ["c#", "C++", "JS"]
};
console.log(user1);
console.log(user1.name);
user1.age = 2;
console.log(user1.age);
// user1.address= '123st'
function printUser(user) {
    console.log(user);
}
// printUser(1)
// printUser([1,2,3])
printUser(user1);
function add1(arg1, arg2) {
    return arg1 + arg2;
}
let o2 = add1(1, 2); //3
function concat2(arg1, arg2) {
    return arg1 + arg2;
}
let o3 = concat2('ahmed', 'mohamed');
// function myfun<T>(arg1:T,arg2:T):T{
//     if(typeof arg1== "string" && typeof arg2 == "string")
//     return arg1+arg2
// }
// let o4 = myfun<string>("hello","world")
// console.log(o4)
function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return 1;
}
function identityGeneric(arg) {
    return arg;
    // return "test"
}
console.log(identity3(1));
console.log(identity3("str"));
console.log(identityGeneric("hello"));
console.log(identityGeneric(2));
function firstElementArray(arr) {
    return arr[0];
}
console.log(firstElementArray([1, 2, 3, 4]));
function firstElementArray2(arr) {
    return arr[0];
}
console.log(firstElementArray2(["c#", "C++", "JS"]));
function genericfun(arr) {
    return arr[0];
}
console.log(genericfun([1, 2, 3]));
console.log(genericfun(["x", "y", "z"]));
function newFun(arr, func) {
    return arr.map(func);
}
const arr4 = ["1", "2", "3"];
newFun(arr4, (n) => parseInt(n));
let val = "hello";
val = [1, 2, 3];
val = 6;
let pen = "red";
pen = "green";
pen = "blue";
var bgColor;
(function (bgColor) {
    bgColor["red"] = "red";
    bgColor["blue"] = "blue";
    bgColor["green"] = "green";
})(bgColor || (bgColor = {}));
let back = bgColor.blue;
// let u1:IUser ={
//     address:"123st",
//     fname:"ali",
//     // lname:"nour",
//     sayHi(){
//         return this.address
//     }
// }
let u2 = {
    fname: "fatma",
    lname: "nour"
};
// u2.fname = "hello"
let u3 = {
    fname: "xyz",
    lname: "abc",
    address: '555',
    sayHi() {
        return '';
    }
};
let u4 = {
    fname: "",
    lname: "",
    sayHi() {
        return '';
    }
};
// u4.lname = 'fdfs'
console.log(u4);
let user5 = {
    fname: 'tst',
    lname: 'xyz'
};
let user6 = {
    lname: '',
    sayHi() {
        return '';
    }
};
let deptSec = "Dev";
let deptsec2 = "DevOps";
// console.log(u2.sayHi())//is not a function
// u1.xyz = "test"//error
// u1.lname = "nour"
// console.log(u1)
let person = {
    // firstname:"ahmed",
    // lastname:"mohamed"
    fname: "ahmed",
    lname: "mohamed",
    sayHi() {
        return this.fname;
    }
};
function fun1(person) {
    return person.fname;
}
// console.log(fun1(person))
// console.log(u1.sayHi())
