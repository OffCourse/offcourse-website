import React from 'react';
import { SignUpForm } from 'offcourse-ui-components';

import AuthProvider from '../AuthProvider';

import './style.less';

const SignUp = () => {
  const handler = (data) => {
    const { authStatus } = data;

    if (authStatus === 'SIGNED_IN') {
      window.location.href = 'https://app.offcourse.io';
    }
  };

  return (
    <div className="ui segment">
      <AuthProvider onSignIn={handler} onSignOut={handler}>
        {({ signUp, authData }) => {
          const {
            authStatus,
            errors,
            needsConfirmation,
          } = authData;
          return authStatus !== 'SIGNED_IN' &&
            <SignUpForm
              confirmMode={needsConfirmation}
              errors={errors}
              onSubmit={signUp}
            />;
        }}
      </AuthProvider>
    </div>
  );
};

export default SignUp;
