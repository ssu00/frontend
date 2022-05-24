import { createProxyMiddleware } from "http-proxy-middleware";
export const setupProxy = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://13.124.128.220:8080",
      changeOrigin: true,
    })
  );
};
