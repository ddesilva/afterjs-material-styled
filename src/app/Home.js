import React, { Component } from 'react';
import logo from './react.svg';
import styled, { injectGlobal } from 'styled-components';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet';

injectGlobal`

	.Home {
    text-align: center;
  }

  .Home-logo {
    animation: logo-spin infinite 20s linear;
    height: 80px;
  }
  
  .Home-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }
  
  .Home-intro {
    font-size: large;
  }
  
  .Home-resources {
    list-style: none;
  }
  
  .Home-resources > li {
    display: inline-block;
    padding: 1rem;
  }
  
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;

const MyPara = styled.p`
  color: grey;
`;

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Helmet>
          <title>Welcome to the homepage</title>
        </Helmet>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to After.js + MaterialUI + Styled Components</h2>
        </div>
        <MyPara className="Home-intro">
          To get started, edit <code>src/Home.js</code> or <code>src/About.js</code>and save
        </MyPara>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Home;
