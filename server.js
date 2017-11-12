'use strict';

//-- Require
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const dragonsJson = require('./dragons.json');
const dinosJson = require('./dinosaurs.json');
const config = require('./config.js');

//-- JWT check

// @TODO: Remove .SAMPLE from /server/config.js.SAMPLE
// and update with your proper Auth0 information

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.CLIENT_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_AUDIENCE,
    issuer: `https://${config.CLIENT_DOMAIN}/`,
    algorithm: 'RS256'
});

//--- Set up app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//--- GET public dinosaurs route
app.get('/api/dinosaurs', (req, res) => 
  res.json(dinosJson)
);

//--- GET protected dragons route
app.get('/api/dragons', jwtCheck, (req, res) =>
  res.json(dragonsJson)
);

//--- Port
app.listen(3001);
console.log('API running on localhost:3001/api');
