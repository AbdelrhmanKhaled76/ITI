var obj = {
    x:20,
    y:20
}

// obj.x = 10
// Object.defineProperty(obj,'myprop',{
//     get:function(){},
//     set:function(){}
// })

var handler = {
    // get(target,prop){
    //     if(target.hasOwnProperty(prop)){
    //         return target[prop]
    //     }
    //     else{
    //         throw 'undefined property'
    //     }
    // },
    // set(target,prop,value){
    //     if(target.hasOwnProperty(prop)){
    //         if(value>10&&value<30){
    //             target[prop]=value
    //         }
    //         else{
    //             throw 'wrong value'
    //         }
    //     }
    //     else{
    //         throw 'undefined property'
    //     }
    // },
    // apply(target,thisArgument,list){

    // }
}


var myProxy = new Proxy(obj,handler)
console.log(myProxy.x)


// Reflect.get()