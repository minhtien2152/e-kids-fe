import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  //nodejs backend
  app.use(
    "/node/*",
    createProxyMiddleware({
      target: "http://10.0.2.2:8088",
      changeOrigin: true,
      pathRewrite: {
        "^/node/": "/",
      },
    })
  );
};
