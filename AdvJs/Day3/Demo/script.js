// function fun(){
//     console.log(usrnm)
// }

// function Employee(nm,id){
//     var usrnm = nm
//     this.id = id
//     this.myfun = fun
// }

// var emp = new Employee('ali',123)

const obj = {
    usrnm:'ali',
    age:25,
    display:function(){
        return this.usrnm
    }
}

obj.usrnm = 'ahmed'
obj.address = '123st'
// obj.display = 'test'

for(var elem in obj){
    console.log(elem)
}

//Descriptors
/**data descriptor
 * accessor descriptor
 * 
 * data-descriptor
 * {
 * value:,
 * writable:,
 * enumerable:,
 * configurable
 * }
 * 
 * accessor descriptor
 * {
 * get:
 * set:
 * enumerable:,
 * configurable
 * }
 */

// var myobj={
//     address:'123st'
// }
// var nm='test'
// Object.defineProperty(myobj,'usrnm',{
//     value:'ali',
//     writable:true,
//     // get:function(){return nm}
//     // enumerable:false,
//     // configurable:false
// })

// Object.defineProperty(myobj,'age',{
//     value:20,
//     writable:true,
//     enumerable:true
// })

// /**accessor descriptor */
// var myId = "123"
// Object.defineProperty(myobj,'id',{
//     get:function(){
//         return myId
//     },
//     set:function(val){
//         myId = val
//     },
//     enumerable:true,
//     configurable:true
// })



// //iterate----enumerable properties
// console.log('test for---in')
// for(var elem in myobj){
//     console.log(elem)
// }

function myfun(){
    return this.myId
}

function Employee(nm,age,id){
    var Id = id
    Object.defineProperty(this,'usrnm',{
        value:nm,
        writable:true
        ,configurable:true
    })

    Object.defineProperty(this,'age',{
        value:age,
    })

    Object.defineProperty(this,'myId',{
        get:function(){
            return Id
        },
        set:function(val){
            Id = val
        }
    })
    this.display = myfun
    // Object.preventExtensions(this)
    // Object.defineProperties(this,{
    //     name:{
// value:'ali',
// writable:true
    //     },
    //     age:{
            // get:function(){},
            // set:function(){}
    //     },
    //     address:{

    //     }
    // })
}



    var emp = new Employee('ahmed',20,111)



//can't add new Property
// Object.preventExtensions(emp)
// emp.salary = 1//

// Object.seal(emp)
//non-configurable
//can't add new property

Object.freeze(emp)
//non-writable----data descriptor
//non-configurable
//can't add new property








