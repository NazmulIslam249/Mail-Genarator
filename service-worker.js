self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('gmail-pwa-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'service-worker.js',
        'icons/icon-192.png',
        'icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});