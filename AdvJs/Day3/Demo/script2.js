/**Abstract
 * Inheritance
 * override
 */
function User(nm,age){
    if(this.constructor == User){
        throw 'Abstract Class'
    }
    this.usrnm = nm
    this.age = age
}

User.prototype.myfun = function(){
    return this.usrnm+"::"+this.age
}
// function display(){
//     return this.id
// }

function Employee(nm,age,id,add){
    // var obj = new User(nm,age)
    //1)chaining parent constructor
    User.call(this,nm,age)
    var address = add||"123"
    // this.usrnm = nm
    // this.age = age
    this.id = id
    this.Address = function(){
        return address
    }
    // this.display = display

    // this.toString = function(){
    //     return this.usrnm
    // }

    // this.valueOf = function(){
    //     return this.age
    // }
}
// Employee.prototype = new User()
// Employee.prototype.User = User.prototype
//prototype chain
Employee.prototype = Object.create(User.prototype)
Employee.prototype.constructor = Employee



Employee.prototype.display = function(){
    return this.Address
}
Employee.prototype.toString = function(){
    return this.usrnm
}

Employee.prototype.test = 'prop'

var emp  = new Employee('ali',20,123)
var emp2  = new Employee('ali',20,123)



var z  = 1
function fun(x,y){
    var z = 10//shadwing
    return x+y+z
}



// {
//     prototype:User.prototype
// }




var obj = {
    xyz:"dsaf"
}

var obj2 = {
    test:'dsfsd'
}

//child,parent
Object.setPrototypeOf(obj,obj2)
console.log(obj.__proto__)//deprecated







