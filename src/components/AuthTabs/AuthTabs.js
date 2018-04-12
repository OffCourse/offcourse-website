import React, { Component } from 'react';
import {
  AuthProvider,
  Button,
  Card,
  Label,
  Header,
  SignInForm,
  SignUpForm,
} from 'offcourse-ui-components';

import './style.less';

class AuthTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: 'signUp',
    };
  }

  render() {
    const { activeMenuItem } = this.state;
    const handler = data => alert(JSON.stringify(data, null, 2));

    return (
      <div className="AuthTabs">
        <div className="AuthTabs__menu">
          <div className="ui secondary pointing menu">
            <a
              className={`${ activeMenuItem === 'signUp' ? 'active ' : ''}item`}
              onClick={() => { this.setState({ activeMenuItem: 'signUp' }); }}
            >
              Sign Up
            </a>
            <a
              className={`${ activeMenuItem === 'signIn' ? 'active ' : ''}item`}
              onClick={() => { this.setState({ activeMenuItem: 'signIn' }); }}
            >
              Sign In
            </a>
          </div>
        </div>

        <div className="ui segment">
          <div className="AuthTabs__item">
            {activeMenuItem === 'signUp' &&
              <AuthProvider onSignIn={handler} onSignOut={handler}>
                {({ signUp, signOut, authData }) => {
                  const {
                    authStatus,
                    errors,
                    userName,
                    accessToken,
                    needsConfirmation,
                    refreshToken
                  } = authData;
                  return authStatus !== "SIGNED_IN" ? (
                    <SignUpForm
                      confirmMode={needsConfirmation}
                      errors={errors}
                      onSubmit={signUp}
                    />
                  ) : (
                    <Card>
                      <div>
                        <Label>User Name</Label>
                        <Header>{userName}</Header>
                      </div>
                      <div>
                        <Button onClick={signOut}>Sign Out</Button>
                      </div>
                    </Card>
                  );
                }}
              </AuthProvider>
            }
            {activeMenuItem === 'signIn' &&
              <AuthProvider onSignIn={handler} onSignOut={handler}>
                {({ signIn, signOut, authData }) => {
                  const {
                    authStatus,
                    errors,
                    userName,
                    accessToken,
                    refreshToken
                  } = authData;
                  return authStatus !== "SIGNED_IN" ? (
                    <SignInForm errors={errors} onSubmit={signIn} />
                  ) : (
                    <Card>
                      <div>
                        <Label>User Name</Label>
                        <Header>{userName}</Header>
                      </div>
                      <Button onClick={signOut}>Sign Out</Button>
                    </Card>
                  );
                }}
              </AuthProvider>

            }
          </div>
        </div>
      </div>
    );
  }
}

export default AuthTabs;
