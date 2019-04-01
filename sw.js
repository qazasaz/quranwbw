const PRECACHE = 'precache-v2.1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
  /* index page */
  'index.html', './',

  /* surah pages */
  './1', './2', './3', './4', './5', './6', './7', './8', './9', './10', 
  './11', './12', './13', './14', './15', './16', './17', './18', './19', './20', 
  './21', './22', './23', './24', './25', './26', './27', './28', './29', './30', 
  './31', './32', './33', './34', './35', './36', './37', './38', './39', './40', 
  './41', './42', './43', './44', './45', './46', './47', './48', './49', './50', 
  './51', './52', './53', './54', './55', './56', './57', './58', './59', './60', 
  './61', './62', './63', './64', './65', './66', './67', './68', './69', './70', 
  './71', './72', './73', './74', './75', './76', './77', './78', './79', './80', 
  './81', './82', './83', './84', './85', './86', './87', './88', './89', './90', 
  './91', './92', './93', './94', './95', './96', './97', './98', './99', './100', 
  './101', './102', './103', './104', './105', './106', './107', './108', './109', 
  './110', './111', './112', './113', './114',
  
  /* stylesheets */
  './assets/css/bootstrap.min.css', './assets/css/bottom-nav.css', './assets/css/dark.css', './assets/css/normal-mode.css', './assets/css/style.css', 

  /* javascripts */
  './assets/js/audio.js', './assets/js/bootstrap.min.js', './assets/js/jquery.min.js', './assets/js/scripts.js', 

  /* fonts */
  './assets/fonts/Cabin-Bold.eot', './assets/fonts/Cabin-Bold.ttf', './assets/fonts/Cabin-Bold.woff', './assets/fonts/Cabin-Bold.woff2', './assets/fonts/IndoPak.woff', './assets/fonts/IndoPak.woff2', './assets/fonts/Uthmani.woff', './assets/fonts/Uthmani.woff2', 

  /* images */
  './assets/images/b-b.png', './assets/images/b-w.png', './assets/images/chevron-gold.svg', './assets/images/chevron-white.svg', './assets/images/favicon.ico', './assets/images/icons-192.png', './assets/images/icons-512.png'

];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
