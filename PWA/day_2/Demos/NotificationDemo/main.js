window.addEventListener('load',event=>{
    navigator.serviceWorker.register('sw.js')
    .then(reg=>{
        console.log('service worker',reg)
    })
    .catch(err=>{
        console.log(err)
    })
})