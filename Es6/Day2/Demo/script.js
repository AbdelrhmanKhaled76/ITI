// /**
//  * default parameters
//  * map,set collections
//  * Symbol
//  * iterator
//  * generators
//  */
// function fun(x=1,y=1,obj){
//     var defaultObj = {
//         nm:'ali',
//         age:25
//     }   
//     // var result = {
//     //     ...defaultObj,
//     //     ...obj
//     // }
//     var result = {address:'123st'}
//     Object.assign(result,defaultObj,obj)
//     console.log(result)
//     return `x+y=${x+y} and ${result.nm} , ${result.age}`
//     // return `x+y=${x+y} and ${obj.nm} , ${obj.age}`
// }

// console.log(fun(1,2,{nm:'ahmed',age:20}))//3
// console.log(fun(1,2,{nm:'ahmed'}))//3
// console.log(fun(1,2,{usrnm:'ahmed'}))//3
// console.log(fun(1,2,5))//3
// console.log(fun(1,2,'str'))//3
// console.log(fun(1,2,true))//3
// console.log(fun(1,2,null))//error typeError
// console.log(fun(1,2,undefined))//error typeError
// // console.log(fun(1))//NaN
// // console.log(fun())//NaN
// // console.log(fun('str',5))//str5
// // console.log(fun(true,5))//6
// // console.log(fun('str',true))//strtrue
// // console.log(fun(null,5))//5
// // console.log(fun(undefined,5))
// // console.log(fun({},{}))


/**
 * Collections
 * Images
 * HTMLCollections
 * NodeList
 * arguments
 * 
 * set&map
 */
// //set----unique Values
// var myset = new Set()
// console.log(typeof myset)
// myset.add(5)
// myset.add(6)
// myset.add({})
// myset.add([1,2,3])
// myset.add([1,2,3])
// var arr=[1,2,3]
// myset.add(arr)
// myset.add(arr)
// myset.add(5)

// myset.delete(5)
// // myset.clear()

// // for(var i=0;i<myset.size;i++){
// //     console.log(myset[i])
// // }
// //for--in ---iterate enumerable keys
// // for(var elem in myset){
// //     console.log(elem)
// // }
// myset.forEach((elem)=>{console.log(elem)})

// //for--of ---iterate values
// for(var elem of myset){
//     console.log(elem)
// }

// var newSet = new Set([1,2,1,7,9],[6])

// //map collection
// //key,value
// //unique key
// var myMap = new Map()
// myMap.set(5,'sfdds')
// myMap.set('test','sfdds')
// myMap.set(true,'sfdds')
// var arr = [1,2,3]
// myMap.set([1,2,3],{})
// myMap.set(arr,'hi')
// myMap.set(5,10)

// for(var i=0;i<myMap.size;i++){
//     console.log(myMap[i])
// }

// for(var elem in myMap){
//     console.log(elem)
// }

// myMap.forEach((value,key)=>{
//     console.log(`key=${key},value=${value}`)
// })

// for(var [key,value] of myMap){
//     console.log(`key=${key},value=${value}`)
// // }


// var obj={
//     nm:'ali',
//     age:20,
//     [Symbol.iterator]:function(){
//         var keys = Object.keys(obj)
//         var counter = 0
//         return {
//             next:function(){
//                 if(counter>=keys.length){
//                     return {value:undefined,done:true}
//                 }
//                 else{
//                     return {value:{key:keys[counter],value:obj[keys[counter++]]},done:false}
//                 }
//             }
//         }
//     }
// }

// for(var elem of obj){
//     console.log(elem)
// }

// var [x,y,z]={ nm:'ali',
//     age:20}
// // Symbol.iterator


// for(var elem of arr){
//     console.log(elem)
// }


// function myfun(){
//     return {
//         next:function(){
//             return {value:,done:}
//         }
//     }
// }

// var x = Symbol('xyz')

// var obj = {
//     propName:'myObj',
//     [x]:'test'
// }

// var str = 'hello world test'
// console.log(str.replace(' ','_'))
// console.log(str.replace(/ /g,'_'))

// // String.prototype.replace = function(obj,char){
// //     obj[Symbol.replace](this,char)
// // }
// var myObj={
//     [Symbol.replace]:function(str,char){
//         return 'hi'
//     }
// }
// console.log(str.replace(myObj))
// console.log(str.replace(' ','_'))
// console.log(str.replace(/ /g,'_'))




/**---------------------------- */
// function * fun(){
//     var x = 1
//     var y = 2
//     var z = x+y
//     yield z
//     // return z
//     console.log(z)
//     var str = 'new msg'
//     yield str
//     console.log(str)
//     var arr=[1,2,3,4]
//     arr.reverse()
//     console.log(arr)
//     yield arr
//     console.log('done')
// }


// for(var elem of fun()){
//     console.log(`Element value ${elem}`)
// }


var arr = [1,2,3,4,5,6,7,8,9,10,11,12,14,16]

function* evenGen(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            yield arr[i]
        }
    }
}


var gen = evenGen(arr)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

















