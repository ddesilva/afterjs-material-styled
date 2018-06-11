import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import routes from './routes';
import Template from './app/Template';

ensureReady(routes).then(data =>
  hydrate(
    <BrowserRouter>
     <Template>
       <After data={data} routes={routes} />
     </Template>
    </BrowserRouter>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
