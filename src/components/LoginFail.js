import React from 'react';
import LoginNav from './Reactstrap/LoginNav'

const LoginFail = () => {
  return(
    <div>
      <LoginNav />
      <div className="fail"></div>

      <div>You don't have permission to do that...</div>
    </div>
  )
};

export default LoginFail;
