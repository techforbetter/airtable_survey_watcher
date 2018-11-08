const express = require('express');
const checkRecords = require('./doCheck');

const server = express();
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  checkRecords(res);
});

server.listen(port, () => {
  console.log('Listening on port %i', port);
});