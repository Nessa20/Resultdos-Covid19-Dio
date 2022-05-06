var CACHE_NAME = 'covid19-pwa';
var urlsToCache = [ '/' ];

//Install a service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then{function(caches) {
            console.log('Opened')
            return caches.addAll(urlsToCache);           
        }}
    );
});

//Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        }
     )
   );
});

//Update a service worker
self.addEventListener('active', event => {
    var cachesWhiteList = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheNames => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                       return caches.delete(cacheNames) ;
                    }
                })
            );
        })
    );
});