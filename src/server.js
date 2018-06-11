import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import MyDocument from './app/Document';
import helmet from 'helmet';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server.use(helmet());
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {

    try {
      const html = await render({
        req,
        res,
        document: MyDocument,
        routes,
        assets,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
      });
      res.send(html);
    } catch (error) {
      res.json(error);
    }
  });

export default server;
