const CACHE = "davonium-clean-final-v1";
const ASSETS = [
  "./","./index.html","./about.html","./products.html","./services.html","./portfolio.html","./contact.html",
  "./css/styles.css","./js/app.js","./manifest.webmanifest",
  "./assets/icons/favicon-32.png","./assets/icons/apple-touch-icon.png","./assets/icons/icon-192.png","./assets/icons/icon-512.png",
  "./assets/images/davonium-d-icon.png"
];
self.addEventListener("install", event => {event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener("activate", event => {event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim();});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response;
  }).catch(() => caches.match("./index.html"))));
});
