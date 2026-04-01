self.__uv$config = {
  prefix: "/uv/service/",
  encodeUrl: (url) => encodeURIComponent(url),
  decodeUrl: (url) => decodeURIComponent(url),
  handler: "/uv/uv.handler.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};

if (typeof window !== "undefined") {
  window.__uv$config = self.__uv$config;
}