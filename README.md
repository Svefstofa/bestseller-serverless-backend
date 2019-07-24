# Express.js on Netlify Example

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/neverendingqs/netlify-express)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b8e9b78b-2021-4687-a0a4-133d4d51bc58/deploy-status)](https://app.netlify.com/sites/bestseller-api/deploys)

An example of how to host an Express.js app on Netlify using
[serverless-http](https://github.com/dougmoscrop/serverless-http). See
[express/server.js](express/server.js) for details, or check it out at
https://netlify-express.netlify.com/!

[index.html](index.html) simply loads html from the Express.js app using `<object>`, and the
app is hosted at `/.netlify/functions/server`. Examples of how to access the
Express.js endpoints:

```sh
curl https://netlify-express.netlify.com/.netlify/functions/server
curl https://netlify-express.netlify.com/.netlify/functions/server/another
curl --header "Content-Type: application/json" --request POST --data '{"json":"POST"}' https://netlify-express.netlify.com/.netlify/functions/server
```
