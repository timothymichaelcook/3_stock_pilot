import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { User_Profile } from '../utils/mutations';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [createUser] = useMutation(User_Profile, {
    onError: (error) => {
      console.error('Error:', error);
    }
  });
  const history = useNavigate();

  const addEmail = (e) => {
    setEmail(e.target.value);
  };

  const addPassword = (e) => {
    setPassword(e.target.value);
  };

  const verifyPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const createAccount = async () => {
    if (password !== confirmPassword) {
      alert("Password isn't the same");
      return;
    }
    try {
      const { data } = await createUser({
        variables: { email, password },
      });
      const user = data.addUser;
      console.log('User:', user);
      alert('Welcome to Stock Pilot');
      history.push('/StockSearch');
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="box">
      <div className="field">
        <label className="title is-4">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={addEmail}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={addPassword}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Confirm Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={verifyPassword}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={createAccount}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
