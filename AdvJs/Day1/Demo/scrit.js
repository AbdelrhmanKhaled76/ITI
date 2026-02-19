// var obj = {
//     objName:'myObj',
//     objId:'123'
// }

// console.log(obj.hasOwnProperty('objName'))//true
// console.log(obj.hasOwnProperty('objData'))//false

// var obj2 = {
//     nm:'ali'
// }

// var empName='test global value'

// //shared function
// function fun1(){
//         var empName = 'hello'
//         console.log(this)
//         // this.test()
//         // // console.log('employee display function')
//         // return this.empName+" :: "+this.age
//     }

//     fun1()//window object
// const emp = {
//     display:fun1,
//     empName:'mohamed',
//     age:25,
//     skills:[],
//     dept:{},
//     test:function(){
//         console.log('test')
//     }
    
// }

// emp.display()//
// // display()
// // delete emp.age

// var myfun = function fun(){
//     console.log('hello')
// }

// myfun()
// //anonymous function
// //call back function
// setTimeout(function(){
//     console.log('settimeout')
// },2000)


// var arr = [1,2,3,function(){
//     console.log('hiii')
// }]
// arr[3]()

// //function statement/declative
// function newFun(){
//     // return 1
//     // return 'str'
//     // return function(){}
//     //function expression
//     //literal creation function
//     //anonymous function
//     var sum = function fun(){}    
//     return sum
// }

// var result = newFun()
// result()




// //shared function
// var usrnm = 'global scope'
// var myfun = function(){
//     return this.usrnm
// }

// var obj = {
//     usrnm:'ali',
//     age:20,
//     display:function(){
//         return this.usrnm
//     },
//     myfun:myfun
// }

// var obj2 = {
//     usrnm : "mohamed",
//     print:myfun
// }

// console.log(myfun())
// console.log(obj.myfun())
// console.log(obj2.print())


// let x = 1

// var myfun = new Function('a','b','return a+b')
// console.log(myfun(1,2));

// [1,2,3];
// 1;
//immediate invoke function expression
// (function(){console.log('anonymous function')})();
// (function(){console.log('2nd function')}())
// void function(){console.log('test')}()
// !function(){console.log('test')}()




function add(x=10,y=11){
    // var x = arguments[0]||10
    // var y = arguments[1]==undefined?11:arguments[1]
    // console.log(arguments)
    return x+y
}

// console.log(add(1,2))//3
// console.log(add(1,2,3,4,5))//3


/**
 * apply
 * call
 * bind
 */

// var str = 'hello world'
// // str.join()
// console.log([1,2,3,4].join('*'))
// console.log([].join.apply(str,['_']))
// console.log([].join.call(str,'-'))

// var res = [].join.bind(str)
// console.log(res())
// console.log(res())
// console.log(res('&'));

// // str.reverse()
// [].reverse.call(str)


/**Inner Function */
//closure
// var z = 1
// function outerfun(x,y){
//     var w = 1
//     function innerfun(a,b){
//         return x+y+z+w+a+b
//     }
//     w++
//     return innerfun
// }

// var result = outerfun(2,3)//
// var result2 = outerfun(10,20)
// console.log(result(1,1))//

//closure problem
/**
 * outerfun
 * i=1
 * arr=[fun1,fun2]
 * anonymous-fun1--i=0--j----->return fun1
 * anonymous-fun2--i=1--j----->return fun2
 * 
 */
function outerfun(){
    var arr = []
    for(var i=0;i<3;i++){
        arr.push((function(j){
            return function(){
                console.log(j)
            }
        })(i))
    }
    return arr
}

var result = outerfun()//[f,f,f]
result[0]()//3-0
result[1]()//3-1
result[2]()//3-2




linkedlist.push(1)
linkedlist.push(3)


[{val:1},{val:3}]


obj={
    id:'xyz',
    nm:'dfdsf',
    getsetGen:function(){

    }
}
obj.getsetGen()
obj={
    id:''
    ,nm:'',
    getId:function(){},
    setId:function(val){}
}

obj.getId()//xyz
obj.setId('123')//id=123

var user = {usernm:'',userage:20}
obj.getsetGen.call(user)


























