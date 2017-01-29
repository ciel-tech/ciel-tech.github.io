var CACHE_NAME = 'v0.1-cieltech',urlsToCache=['/','/index.html','/manifest.json','/js/fontfaceobserver.js','/img/logo.svg','/favicon-16x16.png'];
self.addEventListener('install',function(evt){evt.waitUntil(caches.open(CACHE_NAME).then(function(cache){return cache.addAll(urlsToCache);}));});
self.addEventListener('activate',function(evt){evt.waitUntil(caches.keys().then(function(cacheNames){return Promise.all(cacheNames.filter(function(cacheName){return cacheName!==CACHE_NAME;}).map(function(cacheName){console.log('Deleting '+cacheName);return caches.delete(cacheName);}));}));});
self.addEventListener('fetch',function(evt){evt.respondWith(caches.match(evt.request).then(function(response){return response||fetch(evt.request);}).catch(function(){return caches.match('index.html');}))});
