// // var str= "hello"
// // var fun = [].join.bind(str)//

// // function outerfun(x){

// //     var innerfun = function(y){
// //         return x + y
// //     }
// //     return innerfun

// // }

// // var res = outerfun()

// function add(a) {

//   var myfun = function (b) {

//     // return function (c) {

//       return a + b 

//     // };

    
//   };
//     var xyz = myfun(2)
// }
 
// // add(1)(2)(3); // 6
// var res = add(1)
// // var res2=  res(2)
// // res2(3)

 
//literal creation
// var emp1 = {
//     empName:"ahmed",
//     empAge:25,
//     empAddress:"123"
// }

// var emp2 = {
//     empName:"ali",
//     empAge:25,
//     empAddress:"xyz"
// }

// var emp3={
//     empName:"mohamed",
//     empAge:25,
//     empAddress:"xyz"
// }

//Factory Function

function Employee2(nm,age,add){
    return {
        empName:nm,
        empAge:age,
        empAddress:add,
        display:function(){
            return this.empName
        }
    }
}

 var myObj = Employee2('ahmed',25,123)
// console.log(emp)
// var emp2 = Employee('mohamed',25,456)
// console.log(emp2)


//shared function
function displayfun(){
    return this.empName
}

// //constructor function
// function Employee(nm="",age=0,add="xyz"){
//     this.empName =nm
//     this.empAge = age
//     this.empAddress = add
//     // this.display = function(){
//     //     return this.empName
//     // }
//     // return this
//     this.display = displayfun
    
// }

// var emp = new Employee('ahmed',25,'123st')
// var emp2 = new Employee('mohamed',25,'123st')
// var emp3 = new Employee()
// console.log(emp.display())
// console.log(emp2.display())



// function fun(x,y,z,w){
//     return x+y+z+w
// }

// function fun(){
//     return 'hello'
// }


// function add(x=1,y=2){
//     // var x = arguments[0]||1
//     // var y = arguments[1]||2
//     return x+y
// }

// console.log(add())//3
// console.log(add(4,5))//9

// var usrnm = "test"

//any function without caller----caller--window
//closure--this

// var obj = {
//     usrnm:'ahmed',
//     age:20,
//     display:function(){
//         var that = this
//         // this={}//syntax error
//         setTimeout(function(){
//             alert(that.usrnm)
//         },2000)
//     }
// }

// obj.display()




/**
 * Binding Types
 * default binding
 * implicit binding
 * explicit binding
 * hard binding
 * lexical binding---->arrow function es6
 */


// function fun(){
//     console.log(this)
// }

// fun()//default binding---window



// var obj={
//     objName:'myObj',
//     fun:fun
// }
// console.log(obj.fun())//implicit binding

// function fun(){
//     console.log(this)
//     console.log(this.val)
// }

// function myfun(){
//     var val = "myval"
//     this.val = "myNewVal"
//     this.fun = fun
//     this.fun()
//     fun()
// }

// var val = "globalVal"//myNewVal
// var res = new myfun()
// console.log(val)
/**myNewVal-globalval-globalval   4 */
/**globalVal */



function Employee(nm,id){
    var empAddress = "123st"
    this.usrnm = nm
    this.id = id
    that = this
    function welcome(){
        alert('welcome '+that.usrnm+"::"+empAddress)
    }
    //privillage methods
    this.getAddress = function(){
        return empAddress
    }
    // this.setAddress = function(val){
    //     empAddress = val
    // }
    //explicit binding
     welcome()//window
    // welcome.call(this)
    // welcome.apply(this)
    // var fun = welcome.bind(this)
    // fun()
    // welcome()
    Employee.count++
}
Employee.count = 0
var emp = new Employee('ali',123)
var emp2 = new Employee('ali',123)


b1.title = "xyz"
b2.title = 'abc'
b3.title = 'abc'
[b1,b2]






























