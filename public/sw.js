importScripts("/baremux/index.js");
importScripts("/uv/uv.bundle.js");
importScripts("/uv.config.js");
importScripts("/uv/uv.sw.js");

console.log("BareMux:", Object.keys(BareMux));

const sw = new UVServiceWorker();

self.addEventListener("fetch", event => {
  if (sw.route(event)) {
    event.respondWith(sw.fetch(event));
  }
});