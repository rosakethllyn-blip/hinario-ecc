/* Hinário Digital ECC — service worker "network-first"
   Sempre busca a versão mais nova quando online; usa o cache só como
   reserva quando estiver offline. Assim o app nunca fica preso numa
   versão antiga (resolve o problema de cache do navegador). */
var CACHE = "hinario-cache-v1";

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (nomes) {
      return Promise.all(nomes.map(function (n) {
        if (n !== CACHE) return caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copia = res.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copia); }).catch(function () {});
      return res;
    }).catch(function () {
      return caches.match(e.request);
    })
  );
});
