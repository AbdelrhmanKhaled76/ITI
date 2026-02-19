// // document.getElementById('btn').onclick = function(){
// //     var userId = document.getElementById('usrId').value
// //     document.getElementById('h1id').innerHTML=""

// //     var xhr = new XMLHttpRequest()
// // console.log(xhr.readyState)
// // xhr.onreadystatechange = function(){
// //     console.log(xhr.readyState)
// //     if(xhr.readyState == 4){
// //         console.log(xhr.status)
// //         if(xhr.status >=200 &&xhr.status <300){
// //             console.log(xhr.responseText)
// //             console.log(JSON.parse(xhr.responseText))
// //             var data = JSON.parse(xhr.responseText)

// //             if(data instanceof Array){
// //             for(var i=0;i<data.length;i++){
// //                 document.getElementById('h1id').innerHTML+=data[i].username+"<br>"
// //             }
// //         }
// //         else{
// //             document.getElementById('h1id').innerHTML=data?.username||"not found"
// //         }
// //         }
// //     }
// // }
// // //
// // xhr.open('GET','https://fakestoreapi.com/users/'+userId)
// // // xhr.open('GET','std.json')
// // // xhr.open('GET','textfile.txt')
// // xhr.send()
// // }

// //web Worker API

// async function fun(){
// var x =10
// var mypromise = new Promise(function(success,fail){

//     if(x>5){
//         setTimeout(()=>{
//             success({nm:'ahmed'})
//         },5000)
//     }
//     else{
//         setTimeout(()=>{
//             fail('i am failed')
//         },5000)
//     }
    
// })

// var x2 =10
// var mypromise2 = new Promise(function(success,fail){

//     if(x2>5){
//         setTimeout(()=>{
//             success({nm:'ali'})
//         },2000)
//     }
//     else{
//         setTimeout(()=>{
//             fail('i am failed2')
//         },2000)
//     }
    
// })
// console.log(mypromise)
// console.log(mypromise2)
// // await mypromise
// await mypromise.then(function(msg){
//     console.log(msg)

// }).catch(function(msg){
//     console.log(msg)
// })

// mypromise2.then(function(msg){
//     console.log(msg)
// }).catch(function(msg){
//     console.log(msg)
// })




// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')
// console.log('test')

// }

var result = 
// fetch().then(function(data){

// }).catch
 var x = 1
 var z = x +5*2


//Fetch API

function myfun(method,url){
    var mypromise = new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status>=200 && xhr.status<300){
                    resolve(xhr.responseText)
                }
                else{
                    reject(xhr.status)
                }
            }
        }
        xhr.open(method,url)
        xhr.send()
    })

    return mypromise
}

var result = myfun('GET','st.json')
result.then(function(msg){
    console.log(msg)
}).catch(function(err){
    console.log(err)
})





// var xhr = new XMLHttpRequest()
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState == 4){
//                 if(xhr.status>=200 && xhr.status<300){
//                     // resolve(xhr.responseText)
//                     var xhr = new XMLHttpRequest()
//                 xhr.onreadystatechange = function(){
//                     if(xhr.readyState == 4){
//                         if(xhr.status>=200 && xhr.status<300){
//                             // resolve(xhr.responseText)
//                             var xhr = new XMLHttpRequest()
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState == 4){
//                 if(xhr.status>=200 && xhr.status<300){
//                     // resolve(xhr.responseText)
                    
//                 }
//                 else{
//                     // reject(xhr.status)
//                 }
//             }
//         }
//         xhr.open(method,url)
//         xhr.send()
                            
//                         }
//                         else{
//                             // reject(xhr.status)
//                         }
//                     }
//                 }
//                 xhr.open(method,url)
//                 xhr.send()
//                 }
//                 else{
//                     // reject(xhr.status)
//                 }
//             }
//         }
//         xhr.open(method,url)
//         xhr.send()
























