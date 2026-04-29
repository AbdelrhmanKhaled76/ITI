function getCookie(cookieName) {
    let list  = document.cookie.split("; ")
    //console.log(arguments.length)
    if (arguments.length!=1){
        throw new Error (" getCookie must have only one param")
    }
    if(typeof (cookieName)!=='string')
    {
        throw new Error (" you must pass string type only")
    }
    for(let i =0 ;i < list.length;i++){
        let parts = list[i].split("=")
        if(parts[0]===cookieName){
            return parts[1];
            
        }
    }
     return null;
}

function setCookie (cookieName,cookieValue ,expiryDate =null){
    if(arguments.length <2 || arguments.length > 3)
         throw new Error ("at least pass 2 args ")
    if(typeof (cookieName)!=='string')
        throw new Error (" you must pass string type only")
    if (expiryDate !== null && !(expiryDate instanceof Date)) {
        throw new Error("expiryDate must be a Date object");
    }
    if(expiryDate===null){
        document.cookie = cookieName+"="+cookieValue+";"
    }else{
        document.cookie = cookieName+"="+cookieValue+";expires="+expiryDate.toUTCString() ;
    }
}

function allCookieList (){
    if(arguments.length !==0)
        throw new Error( ' allCookieList must have no args')
    let arr = document.cookie.split("; ")
    let obj ={}
    for (let i =0 ;i < arr.length;i++){
        let parts = arr[i].split("=")
        obj[parts[0]]= parts[1]
    }
    return obj;

}
function hasCookie (cookieName) {
    return getCookie(cookieName) !== null;
}



function deleteCookie (cookieName) {
    if (arguments.length!=1)
        throw new Error (" getCookie must have only one param")
    if(typeof (cookieName)!=='string')
        throw new Error (" you must pass string type only")
    
    let date = new Date()
     date.setFullYear(date.getFullYear() - 10);
      document.cookie = cookieName+"="+";expires="+date.toUTCString() ;
}
function Getlength () {
     if(arguments.length !==0)
        throw new Error( ' allCookieList must have no args')
}