import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { AfterRoot, AfterData } from '@jaredpalmer/after';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import Template from './Template';

export default class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    // styled-components
    const sheet = new ServerStyleSheet();

    // material-ui
    const generateClassName = createGenerateClassName();
    const sheetsRegistry = new SheetsRegistry();

    const page = await renderPage(App => props => (
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <Template>{sheet.collectStyles(<App {...props} />)}</Template>
      </JssProvider>
    ));

    // styled-components
    const styleTags = sheet.getStyleElement();

    // material-ui
    const css = sheetsRegistry.toString();

    return { assets, data, ...page, styleTags, css };
  }

  render() {
    const { helmet, assets, data, styleTags, css } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/** here is where we put our Material UI styleTags... */}
          <style id="jss-server-side" type="text/css">
            {css}
          </style>

          {/** here is where we put our Styled Components styleTags... */}
          {styleTags}

          {helmet.script.toComponent()}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <script type="text/javascript" src={assets.client.js} defer crossOrigin="anonymous" />
        </body>
      </html>
    );
  }
}
