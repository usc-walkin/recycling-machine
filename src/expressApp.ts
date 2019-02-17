import cors from 'cors';
import express from 'express';

import config from '@@config';
import httpLogger from '@@middlewares/httpLogger';

function createExpressApp() {
  const port = config.expressPort;

  const app = express();
  app.use(cors());
  app.use(httpLogger);

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
