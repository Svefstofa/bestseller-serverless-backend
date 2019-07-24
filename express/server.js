"use strict";
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");
const products = require("./products");

const keyAndSecret = `${process.env.CONSUMER_KEY}:${
  process.env.CONSUMER_SECRET
}`;
const basicAuth = `Basic ${new Buffer(keyAndSecret).toString("base64")}`;
const rootApiUrl = "https://bestseller.sendiradid.is/wp-json/wc/v3";

const router = express.Router();
router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});
router.get("/another", (req, res) => res.json({ route: req.originalUrl }));
router.post("/", (req, res) => res.json({ postBody: req.body }));

products.productRoutes(router, rootApiUrl, basicAuth);

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
