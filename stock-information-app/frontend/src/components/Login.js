import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, validateEmail] = useState('');
  const [password, validatePassword] = useState('');

  const acceptEmail = (e) => {
    validateEmail(e.target.value);
  };

  const acceptPassword = (e) => {
    validatePassword(e.target.value);
  };

  const validate = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="box">
      <div className="field">
        <h1 className="title is-4">Log in</h1>
        <form onSubmit={validate}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Login email address" value={email} onChange={validateEmail} />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" value={password} onChange={validatePassword} />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Log in</button>
            </div>
            <div className="control">
              <Link to="/SignUp" className="button is-link">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
