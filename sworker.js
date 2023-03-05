self.addEventListener("install",e=>{
   // console.log('service worker changed');
   e.waitUntil(
    caches.open("static").then(cache=>{
        return cache.addAll(["./","./style.css","./script.js","p5.min.js","./images/map1.png","./images/map2.png"])
    })
   )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(responce=>{
            return responce || fetch(e.request);
        })
    )
})