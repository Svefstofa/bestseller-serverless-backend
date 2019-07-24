const requestProxy = require("express-request-proxy");

// export const productRoutes = (app: express.Express, rootApiUrl: string, basicAuth: string) => {
module.exports = {
  productRoutes: (router, rootApiUrl, basicAuth) => {
    router.get(
      "/api/products/:id/:subresource/:subid",
      requestProxy({
        url: `${rootApiUrl}/products/:id/:subresource/:subid`,
        headers: {
          Authorization: basicAuth
        }
      })
    );
    router.get(
      "/api/products/:id/:subresource",
      requestProxy({
        url: `${rootApiUrl}/products/:id/:subresource`,
        headers: {
          Authorization: basicAuth
        }
      })
    );
    router.get(
      "/api/products/:id",
      requestProxy({
        url: `${rootApiUrl}/products/:id`,
        headers: {
          Authorization: basicAuth
        }
      })
    );
    router.get(
      "/api/products",
      requestProxy({
        url: `${rootApiUrl}/products`,
        headers: {
          Authorization: basicAuth
        }
      })
    );
  }
};
