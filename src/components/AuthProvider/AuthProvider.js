import React, { Component } from 'react';
import 'regenerator-runtime/runtime';

import cognito from './Cognito';

const SIGNED_OUT = 'SIGNED_OUT';
const SIGNED_IN = 'SIGNED_IN';

const defaultProps = {
  onSignIn: authData => console.log(authData),
  onSignOut: authData => console.log(authData),
};

const defaultState = {
  authStatus: SIGNED_OUT,
  userName: '',
  accessToken: '',
  refreshToken: '',
  needsConfirmation: false,
  errors: {},
};

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.confirmSignUp = this.confirmSignUp.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.confirmNewPassword = this.confirmNewPassword.bind(this);
    this.signOut = this.signOut.bind(this);

    this.state = defaultState;
  }

  handleError(error) {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, ...error } });
  }

  async signIn(authData) {
    try {
      const { userName, accessToken, refreshToken } = await cognito.signIn(authData);

      this.setState({
        authStatus: SIGNED_IN,
        userName,
        accessToken,
        refreshToken,
      });

      this.props.onSignIn({ ...this.state });
    } catch (error) {
      this.handleError(error);
    }
  }

  async signUp(authData) {
    try {
      const response = await cognito.signUp(authData);
      const { userName, password } = authData;

      this.setState({
        needsConfirmation: true,
        userName,
        password
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  async confirmSignUp(authData) {
    try {
      const response = await cognito.confirmSignUp(authData);
      const { userName, password } = this.state;

      this.signIn(authData);
    } catch (error) {
      this.handleError(error);
    }
  }

  async resetPassword(authData) {
    try {
      const response = await cognito.resetPassword(authData);
      const { userName } = authData;

      this.setState({
        needsConfirmation: true,
        userName
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  async confirmNewPassword(authData) {
    try {
      const { userName } = this.state;
      const response = await cognito.resetPassword({ userName, ...authData });
      const { password } = authData;

      this.signIn({ userName, password });
    } catch (error) {
      this.handleError(error);
    }
  }

  async signOut() {
    await cognito.signOut;
    this.setState({ ...defaultState });
    const { authStatus } = this.state;

    this.props.onSignOut({ authStatus });
  }

  render() {
    const { children, ...rest } = this.props;
    const { needsConfirmation } = this.state;
    const {
      signIn,
      signOut,
      signUp,
      confirmSignUp,
      resetPassword,
      confirmNewPassword
    } = this;

    return children({
      signIn,
      signOut,
      resetPassword: needsConfirmation ? confirmNewPassword : resetPassword,
      signUp: needsConfirmation ? confirmSignUp : signUp,
      authData: this.state
    });
  }
}

AuthProvider.defaultProps = defaultProps;

export default AuthProvider;
