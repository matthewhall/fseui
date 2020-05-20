const express = require('express');

module.exports = () => {
  const app = express();

  app.use(express.static(`${__dirname}/dist`));

  return app;
}
