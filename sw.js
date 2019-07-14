const PRECACHE = 'precache-v1.78';
const RUNTIME = 'runtime-v1.78';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
  /* index page */
  './',

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

  /* surah json files */
  './data/1.json', './data/2.json', './data/3.json', './data/4.json', './data/5.json', 
  './data/6.json', './data/7.json', './data/8.json', './data/9.json', './data/10.json', 
  './data/11.json', './data/12.json', './data/13.json', './data/14.json', './data/15.json', 
  './data/16.json', './data/17.json', './data/18.json', './data/19.json', './data/20.json', 
  './data/21.json', './data/22.json', './data/23.json', './data/24.json', './data/25.json', 
  './data/26.json', './data/27.json', './data/28.json', './data/29.json', './data/30.json', 
  './data/31.json', './data/32.json', './data/33.json', './data/34.json', './data/35.json', 
  './data/36.json', './data/37.json', './data/38.json', './data/39.json', './data/40.json', 
  './data/41.json', './data/42.json', './data/43.json', './data/44.json', './data/45.json', 
  './data/46.json', './data/47.json', './data/48.json', './data/49.json', './data/50.json', 
  './data/51.json', './data/52.json', './data/53.json', './data/54.json', './data/55.json', 
  './data/56.json', './data/57.json', './data/58.json', './data/59.json', './data/60.json', 
  './data/61.json', './data/62.json', './data/63.json', './data/64.json', './data/65.json', 
  './data/66.json', './data/67.json', './data/68.json', './data/69.json', './data/70.json', 
  './data/71.json', './data/72.json', './data/73.json', './data/74.json', './data/75.json', 
  './data/76.json', './data/77.json', './data/78.json', './data/79.json', './data/80.json', 
  './data/81.json', './data/82.json', './data/83.json', './data/84.json', './data/85.json', 
  './data/86.json', './data/87.json', './data/88.json', './data/89.json', './data/90.json', 
  './data/91.json', './data/92.json', './data/93.json', './data/94.json', './data/95.json', 
  './data/96.json', './data/97.json', './data/98.json', './data/99.json', './data/100.json', 
  './data/101.json', './data/102.json', './data/103.json', './data/104.json', './data/105.json', 
  './data/106.json', './data/107.json', './data/108.json', './data/109.json', './data/110.json', 
  './data/111.json', './data/112.json', './data/113.json', './data/114.json',

  /* stylesheets */
  './assets/css/bootstrap.min.css', './assets/css/dark.css', './assets/css/normal.css', './assets/css/style.css', './assets/css/index.css',  

  /* javascripts */
  './assets/js/bootstrap.min.js', './assets/js/jquery.min.js', './assets/js/main.js', 

  /* fonts */
  './assets/fonts/Cabin-Bold.eot', './assets/fonts/Cabin-Bold.ttf', './assets/fonts/Cabin-Bold.woff', './assets/fonts/Cabin-Bold.woff2', './assets/fonts/IndoPak.woff', './assets/fonts/IndoPak.woff2', './assets/fonts/Uthmani.woff', './assets/fonts/Uthmani.woff2', 

  /* images */
  './assets/images/bismillah.png', './assets/images/chevron.svg', './assets/images/loading.png', './assets/images/play.png', './assets/images/pause.png',

  /* other stuff */
  './assets/surahs.html', './assets/about.html'

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
        if (cachedResponse) return cachedResponse;
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
