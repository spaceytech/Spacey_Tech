const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/auth", {
      target:
        "https://5c96a5e52938fa14c59f3762--condescending-khorana-538fdd.netlify.com/"
    })
  );
  app.use(
    proxy("/api", {
      target:
        "https://5c96a5e52938fa14c59f3762--condescending-khorana-538fdd.netlify.com/"
    })
  );
};
