import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Welcome to the homepage</title>
        </Helmet>
        about
      </React.Fragment>
    );
  }
}

export default Home;
