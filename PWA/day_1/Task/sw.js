var staticfilesToCache = [
    'demo.html',
    'page2.html',
    'CSS/page1.css',
    'JS/page1.js',
    'error_offline.html',
    'wrong_path.html'
]

const cacheName = 'ourData'
self.addEventListener('install', event => {
    console.log('installing service worker')
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(staticfilesToCache)
            })
            .catch(err => {
                console.log(err)
            })
    )
})

self.addEventListener('activate', event => {
    console.log('activating service worker')
})

self.addEventListener('fetch', event => {
    console.log('fetching.........', event.request.url)
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log('found in cache', event.request.url)
                    return response
                }
                // Network request to server
                console.log('network request', event.request.url)
                return fetch(event.request).then((res) => {
                    // Check if response is valid
                    if (!res || res.status !== 200) {
                        return caches.match('wrong_path.html');
                    }
                    // Cache successful responses
                    const clonedRes = res.clone();
                    caches.open(cacheName).then(cache => {
                        cache.put(event.request, clonedRes);
                    });
                    return res;
                }).catch((err) => {
                    // Network error or offline
                    console.log('Network error:', err)
                    return caches.match('error_offline.html');
                })
            })
            .catch(err => {
                console.log('Cache match error:', err)
                return caches.match('error_offline.html');
            })
    )
})