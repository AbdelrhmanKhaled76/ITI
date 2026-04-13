// class Test{}

/**String,Number,Boolean */
let a1:number = 1
// a1 = "str"
// a1 = true
console.log(a1)

function add(arg1:number,arg2:number){
    return arg1+arg2
}

console.log(add(1,2))
// console.log(add(true,true))
// console.log(add(true,"str"))


let a3 = 1
a3=2
// a3="bbb"

let x 
// x=1
// x="test"
// x=true
// x= [1,2,3]
x=5
// x.forEach(elem=>{
//     console.log(elem)
// })
x="str"

function varCheck(arg:number):boolean|string{
    if(arg>10){
        if(arg>5){
            return true
        }
        else{
            return false
        }
    }
    else{
        return "data"+arg
    }
}

let o1 = varCheck(1)
// o1 = true
// o1="aaa"
// o1=5
/**---------------------------------------------------------- */
//Array
// let arr:number|string[] = ['str','dff']
let arr=[4,5,6]

function printArray(arg:number[]){
    arg.forEach(elem=>{
        console.log(elem)
    })
}
// printArray(arr)
// printArray(27)

//tuple
// let myArr:[number,number,number]=[1,2,3]


/**-------------------------------------------------- */
//Object

let user1:{name:string,age:number,courses:string[]} ={
    name:"ahmed",
    age:20,
    courses:["c#","C++","JS"]
}

console.log(user1)
console.log(user1.name)
user1.age = 2
console.log(user1.age)
// user1.address= '123st'

function printUser(user:{name:string,age:number,courses:string[]}){
    console.log(user)
}
// printUser(1)
// printUser([1,2,3])
printUser(user1)

function add1(arg1:number,arg2:number){
    return arg1+arg2
}
let o2= add1(1,2)//3
function concat2(arg1:string,arg2:string){
    return arg1+arg2
}
let o3= concat2('ahmed','mohamed')

// function myfun<T>(arg1:T,arg2:T):T{
//     if(typeof arg1== "string" && typeof arg2 == "string")
//     return arg1+arg2
// }
// let o4 = myfun<string>("hello","world")
// console.log(o4)
function identity(arg:number):number{
    return arg
}
function identity2(arg:string):string{
    return arg
}
function identity3(arg:any):any{
    return 1
}
function identityGeneric<T>(arg:T):T{
    return arg
    // return "test"
}
console.log(identity3(1))
console.log(identity3("str"))
console.log(identityGeneric<string>("hello"))
console.log(identityGeneric(2))

function firstElementArray(arr:number[]){
    return arr[0]
}
console.log(firstElementArray([1,2,3,4]))
function firstElementArray2(arr:string[]){
    return arr[0]
}
console.log(firstElementArray2(["c#","C++","JS"]))
function genericfun<T>(arr:T[]):T|undefined{
    return arr[0]
}
console.log(genericfun<number>([1,2,3]))
console.log(genericfun(["x","y","z"]))


function newFun<Input,Output>(arr:Input[],func:(arg:Input)=>Output){
    return arr.map(func)
}
const arr4 = ["1","2","3"]
newFun<string,number>(arr4,(n)=>parseInt(n))

/**-------------------------- */
// let val:string|number|number[]
type myType = string|number|number[]

let val:myType ="hello"
val = [1,2,3]
val = 6
// val = true

type colors = "red"|"green"|"blue"
let pen:colors = "red"
pen="green"
pen="blue" 

enum bgColor{
    red = "red",
    blue="blue",
    green="green"
}

let back:bgColor = bgColor.blue
// back = "green" as bgColor
// console.log(back)
// back = 1 //blue
// back = 3
interface IPerson{
    readonly fname:string
    lname:string//optional
    sayHi:()=>string
}
interface IUser extends IPerson{
    address:string
}
// let u1:IUser ={
//     address:"123st",
//     fname:"ali",
//     // lname:"nour",
//     sayHi(){
//         return this.address
//     }
// }
let u2:Partial<IUser>={
    fname :"fatma",
    lname:"nour"
}
// u2.fname = "hello"
let u3:Required<IUser>={
    fname:"xyz",
    lname:"abc",
    address:'555',
    sayHi(){
        return ''
    }
}
let u4:Readonly<IPerson>={
    fname:"",
    lname:"",
    sayHi(){
        return ''
    }
}
// u4.lname = 'fdfs'
console.log(u4)
type newPerson = Pick<IPerson,'fname'|'lname'>
let user5:newPerson ={
    fname:'tst',
    lname:'xyz'
}
let user6:Omit<IPerson,'fname'>={
    lname:'',
    sayHi(){
        return ''
    }
}

type sections = "HR"|"Dev"|"DevOps"
let deptSec:Extract<sections,"HR"|"Dev">="Dev"
let deptsec2:Exclude<sections,"Dev">="DevOps"
// console.log(u2.sayHi())//is not a function
// u1.xyz = "test"//error
// u1.lname = "nour"
// console.log(u1)

let person:IPerson = {
    // firstname:"ahmed",
    // lastname:"mohamed"
    fname :"ahmed",
    lname:"mohamed",
    sayHi(){
        return this.fname
    }
}

function fun1(person:IPerson){
    return person.fname
}
// console.log(fun1(person))
// console.log(u1.sayHi())




