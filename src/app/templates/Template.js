/*
  THIS THE THE MAIN TEMPLATE FOR THE APP FOR GLOBAL STYLES AND LAYOUT
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

const theme = createMuiTheme({});

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family 'Arial'
  }
  
  h1, h2 {
		font-family: 'Roboto', sans-serif;
	}
	
	button {
	  font-family: 'Roboto', sans-serif;
	}
`;

class Template extends Component {
  componentDidMount() {
    // DO NOT TOUCH. (SSR RELATED)
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <Helmet>
          <title>Fallback title</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

Template.routes = {
  routes: PropTypes.array
};

export default Template;
