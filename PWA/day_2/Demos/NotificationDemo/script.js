Notification.requestPermission(status=>{
    console.log('Notification Permission',status)
})

document.getElementById('btn').onclick = function(){
    navigator.serviceWorker.getRegistration()
    .then(reg=>{
        var option ={
            body:'Test Notifcation',
            icon:'images/notification-flat.png',
            actions:[
                {action:'explore',title:'Link'},
                {action:'close',title:'close Notification'}
            ]
        }
        reg.showNotification('hello world',option)
    })
    .catch(err=>console.log(err))
}