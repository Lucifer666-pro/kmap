if("serviceWorker" in navigator)
{
navigator.serviceWorker.register("sworker.js").then(registration=>{
    console.log("service worker registetred");
}).catch(err=>{
    console.log('service worker eror');
})
}
else{
    alert("service worker not working")
}