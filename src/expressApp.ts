import express from 'express';

import config from '@@config';

function createExpressApp() {
  const app = express();
  const port = config.expressPort;

  app.use('/' , (req, res, next) => {
    res.send({
      foo: 'power',
    });
  });

  app.listen(port, () => {
    console.log('Listening on port: %s', port);
  });

  return app;
}

export default createExpressApp;
