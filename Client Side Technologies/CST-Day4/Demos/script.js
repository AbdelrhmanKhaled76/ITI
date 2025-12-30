// ////////global scope--->str=undefined,x=undefined,i=undefined,fn(fun),
// //////// script scope --->num
// /////block scope
// ///local scope

// //GLOBAL SCOPE
// // fun();/////

// console.log(str) //undefined
// var str
// str = 'hello'

// var str = 'abc'
// let num
// num = 100
// console.log(str)
// console.log(num)
// console.log(x)

// //block scope
// {
//   //y,z
//   console.log(str)
//   var x = 10
//   let y = 20
//   const z = 30
//   console.log(x)
//   console.log(y)
//   console.log(z)
// }
// console.log(x) //10

// let z = 90
// var b = 'abc'
// // let a = 100

// // $ = 10

// // console.log(newVar) //error

// //function statement
// function fun () {
//   var newVar = 80
//   // console.log(a) //error
//   ////////a,b,c
//   //local scope
//   console.log(str)
//   console.log(z) //90
//   //function scope,block scope
//   a = 10 //XXXXXX
//   let b = 20
//   const c = 30

//   console.log(a) //10
//   console.log(b) //20
// }
// // console.log(i);//undefiend

// for (var i = 0; i < 5; i++) {
//   let z = 10
//   let y = 'dgsfgh'
//   //block scope
//   console.log(num)
//   console.log(i)
//   console.log(str)
// }
// // console.log(i);//

// fun()

// console.log(a) //10

var x = 'abc' //litral creation---->1
typeof x //string

var y = String('abc') // function call-->2

var str = new String('abc') //ctor creation--> avoid
typeof str //object

x.length
str.length

// RegExp
// str.replace(x,"")
var x = 'J'
var flag = 'gi'
var regExp = new RegExp('J', flag) //ctor creation

var regExp = /j/gi //literal creation

// j.*t
// j
// eng\.
// dr\/
// \$
// pattern
// [0-5]{3,}
// [0-9]
// [a-zA-Z]
// .
// [a-z]
// +
// ?
// *
// ^$
// ()
// |

regExp = /[0-9]{11}/
regExp.test('')
