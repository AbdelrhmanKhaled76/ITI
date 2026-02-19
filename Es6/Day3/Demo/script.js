/**
 * Classes
 * Modules
 * Proxy
 * Ajax
 * Promises
 */
// var EmpName = ""

class User{
    constructor(nm,age){
        //  if(new.target == User)
        //     console.log('test')
        if(this.constructor == User)
            throw new ReferenceError('wrong instance')
        this.name = nm
        this.age = age
    }

    display(){
        return `${this.name} , ${this.age}`
    }
}

// var u1 = new User('',5)
class Employee extends User{

    // EmpName
    #address = "123st"
    // const x = 1
    constructor(nm="",age=0,id=111,add='xy'){
        super(nm,age)
        // var myval
        // this.EmpName = nm
        // this.age = age
        this.Id = id
        this.#address = add
        // this.myfun = function(){}
        Employee.counter++
    }

    display(msg){
        if(!msg)
            return `this is ${this.name} and age ${this.age} address ${this.#address}`
        else{
            return this.age
        }
    }

    get Address(){
        return this.#address
    }
    set Address(val){
        this.#address = val
    }

    toString(){
        return `welcome ${this.name}`
    }

    static counter = 0
    static myfun(obj){
        return obj.name
        // console.log(this)
        // return Employee.counter
        // return this.counter
    }
}
Employee.mystaticFun = function(){

}
Employee.prototype.newFun = function(){
    //  return `this is ${this.EmpName} and age ${this.age} address ${this.#address}`
}

var emp = new Employee('ali',20,123,'xyzst..')
var emp1 = new Employee('ali',20,123,'xyzst..')
var emp2 = new Employee('ali',20,123,'xyzst..')
console.log(emp)
// console.log(emp.#address)//error







// function myfun(nm,age){
//     var address = '12'
//     this.nm = nm
//     this.age = age
// }

// myfun.prototype.testFun = function(){
//     return address
// }










