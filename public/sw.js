// Service Worker for offline support
const CACHE_NAME = 'french-journey-v1';
const urlsToCache = [
  '/',
  '/gaul-to-glory',
  '/gallic-ghosts',
  '/great-shift',
  '/birth-of-romance',
  '/old-french-grammar',
  '/invaders',
  '/great-transformation',
  '/spelling-madness',
  '/renaissance',
  '/standardization',
  '/reforms-1740',
  '/enlightenment',
  '/revolution',
  '/reform-1835',
  '/colonial-expansion',
  '/modern-challenge',
  '/modern-innovations',
  '/african-renaissance',
  '/legacy',
  '/manifest.json',
  '/images/river.png',
  '/images/favicon.ico',
  // Add other essential assets
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available, otherwise fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});