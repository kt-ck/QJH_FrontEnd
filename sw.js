self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("application-store")
      .then((cache) =>
        cache.addAll(["index.html", "index.js", "static/images/beast.png"])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
