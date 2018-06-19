import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import buttonList from '../initialButtonList';
import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';

class Login extends Component {
  /**
   * Send the user to 'Dashboard' if is authenticated
   */
  componentDidMount() {
    auth.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/dashboard');
      }
    });
  }

  render() {
    return (
      <Layout contentCenter={true}>
        <p>Connect With</p>
        <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
        <Link to="/about">About</Link>
      </Layout>
    );
  }
}

export default Login;
