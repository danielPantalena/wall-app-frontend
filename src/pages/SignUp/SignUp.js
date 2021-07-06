import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser, getUserToken } from '../../helpers';
import { Button } from '../../components';
import './style.css';

const SignUp = () => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { username, email, password } = userData;

  const handleChange = ({ target: { name, value } }) => {
    const newUserData = { ...userData, [name]: value };
    return setUserData(newUserData);
  };

  const handlePasswordConfirmationChange = ({ target: { value } }) => {
    setPasswordConfirmation(value);
    return setIsPasswordConfirmed(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordConfirmation !== password) return setIsPasswordConfirmed(false);
    setIsLoading(true);
    return createUser(userData).then(
      (response) => {
        if (response.status === 201) setIsUserCreated(true);
        setIsLoading(false);
      },
      (err) => console.error('Error:', err.message),
    );
  };

  const handleRedirection = () => {
    setIsLoading(true);
    sessionStorage.username = username;
    getUserToken(username, password).then((response) => {
      sessionStorage.userToken = response.data.token;
      setIsLoading(false);
      setShouldRedirect(true);
    });
  };

  if (shouldRedirect) return <Redirect to="/" />;

  if (isLoading) return <div>Loading...</div>;

  if (isUserCreated)
    return (
      <div>
        <p>
          Congratulation! Your user <strong>{username}</strong> was created :D
        </p>
        <Button onClick={handleRedirection} text="Go to the wall" />
      </div>
    );

  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-up-form-container">
        <label>
          <p>Username:</p>
          <input type="text" value={username} onChange={handleChange} name="username" required />
        </label>
        <label>
          <p>Email:</p>
          <input type="email" value={email} onChange={handleChange} name="email" required />
        </label>
        <label>
          <p>Password:</p>
          <input type="text" value={password} onChange={handleChange} name="password" required />
        </label>
        <label>
          <p>Confirm Password:</p>
          <input
            type="text"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            name="password-confirmation"
            required
          />
          {!isPasswordConfirmed && <span>The passwords are different</span>}
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUp;
