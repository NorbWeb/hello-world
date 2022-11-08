// Change this to your repository name
var GHPATH = '/hello-world';
 
// Choose a different app prefix name
var APP_PREFIX = 'hw_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/style.css`,
  `${GHPATH}/index.js`
]



// var staticCacheName = "pwa";
 
// self.addEventListener("install", function (e) {
//   e.waitUntil(
//     caches.open(staticCacheName).then(function (cache) {
//       return cache.addAll(["/"]);
//     })
//   );
// });
 
// self.addEventListener("fetch", function (event) {
//   console.log(event.request.url);
 
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return response || fetch(event.request);
//     })
//   );
// });