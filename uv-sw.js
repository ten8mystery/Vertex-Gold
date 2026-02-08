
importScripts('data/local/pages/unlocker/ultraviolet/uv.bundle.js');
importScripts('data/local/pages/unlocker/ultraviolet/uv.config.js');
importScripts('data/local/pages/unlocker/ultraviolet/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
