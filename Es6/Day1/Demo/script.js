
// console.log(x)//undefined
// var x = 1

// // console.log(y)
// let y = 1

// // console.log(data)
// data = 5

// function fun(x){
//     let y = 2//shadwing
//     let sum = x+y
//     testVal = 1
//     return sum
// }
// // let y =2
// // var x = 2

// fun()
// console.log(testVal)
// // try{
// //     var x = 1
// //     throw 'error'
// //     console.log(x)
// // }catch(err){
// //     console.log(err)
// //     throw 'catch error'
// // }
// // finally{
// //     console.log('finally msg')
// // }
// // console.log('done')


// {
//     let newVal = 5
//     var u = 'xyz'
// }


// function outerfun()
// {
//     var arr = []
//     for(let i=0;i<3;i++){
//         arr.push(function(){
//             console.log(i)
//         })
//     }
//     return arr
// }

// var res = outerfun()
// res[0]()
// res[1]()
// res[2]()


//Arrow Function
// var myfun = (x,y)=>{ return x + y}
// console.log(myfun(1,2))

// function myfun(){
//     console.log(this)
// }
// let newfun=()=>{
//     console.log(this)
// }

// var obj = {
//     usrnm:'ahmed',
//     age:20,
//     display:function(){
//         setTimeout(()=>{
//             console.log(this.usrnm)
//         },2000)
//     },
//     fun:()=>{
//         console.log(this)
//         console.log(this.age)
//     },
//     propfun1:newfun,
//     propfun2:myfun

// }

// // obj.display()
// obj.propfun1()//window
// obj.propfun2()//obj
// myfun()//window
// newfun()//window-{}
// function sharedfun(){
//     console.log(this.usrnm)
// }

// // var sharedfun =()=>{
// //     console.log(this.usrnm)
// // }

// var obj = {
//     usrnm:'ahmed',
//     display:sharedfun,
//     test:function(){
//         setTimeout(()=>{
//             console.log(this.usrnm)
//         },2000)
//     }
//     // function(){
//     //     // this---->obj
//     //     console.log(this.usrnm)
//     // }
// }

// var obj2 = {
//     usrnm:'Mohamed',
//     display:sharedfun
//     // function(){
//     //     // this---->obj
//     //     console.log(this.usrnm)
//     // }
// }
// obj.display()//implicit binding
// obj2.display()


/**rest Parameter
 * spread operator
 */
// function fun(x,y,...z){
//     console.log(arguments)
//     console.log(z)
//     return x + y
// }

// console.log(fun(1,2,3,4,5,6))//3

//spread operator
//shallow copy
//Deep copy
// JSON.stringify
// var arr = [1,2,3,4,5,[1,2,3,[5,6]]]
// // var arr2 = arr
// // arr2[0]=111
// var arr2 = [...arr]
// arr2[0]=111
// arr2[5][0]='new Value'


// var obj ={
//     nm:'xyz',
//     age:25,
//     display:function(){
//         return this.nm
//     }
// }

// var obj2 = {
//     nm :'hi',
//     ...obj
    
// }
// console.log(obj2.nm)
// for(var elem in obj){
//     obj2[elem]=obj[elem]
// }

//Destructuring Array
//Destructuring Object
// var arr=[1,2,3,4,5,6,7,8]
// // var x = arr[0]
// // var y = arr[7]
// // var z = arr[4]
// // var[x,,,,z,,,y]="hello world"
// let x,y,z 
// [x,,,,z,,,y]=arr
// function fun(){
//     return "hello world"
// }
// var[x,,,,z,,,y]=fun()
// var[x,,,,z,,,y]={usrnm:'ahmed',age:20}//error

//Destructuring Object
// var obj={
//     nm:'ahmed',
//     age:25
// }

// // var x = obj.nm
// // var y = obj.age
// var x,y,w
// ({y:age,nm:x,address:w}=obj)

// function fun(nm,age,id){
//     console.log(this)
//     return{
//         nm,
//         age,
//         id
//     }

// }

// console.log(fun('ahmed',20,123))

// var res = new fun('xyz',15,2)


// var str = "    hello world        "
// console.log(str.trimRight()+"....")
// console.log(str.trimEnd()+"....")
// console.log(str.trimStart()+"....")
// console.log(str.includes('hex'))
// console.log(str.repeat(2000))

//window---check paramter is not a number---string---true
console.log(isNaN('dfds'))//true
console.log(isNaN('123'))//true
console.log(isNaN('123fdsfsd'))//true


// console.log(Number.isFinite('123'))
// console.log(Number.isFinite(123))
// console.log(Number.isFinite('123dsfadfds'))


//x == NaN
console.log(Number.isNaN('123'))
console.log(Number.isNaN('xyz'))
console.log(Number.isNaN(123))

var x = 2
y = 3
console.log(`${x}+${y}=${x+y}`)



















