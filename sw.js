self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("application-store")
      .then((cache) =>
        cache.addAll([
          "/application/",
          "/application/index.html",
          "/application/index.js",
          "/application/static/images/beast.png",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
