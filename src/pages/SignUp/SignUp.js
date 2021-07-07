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
  const [errorMessage, setErrorMessage] = useState('');
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
    return createUser(userData)
      .then(
        (response) => {
          console.log(response);
          if (response.status === 201) setIsUserCreated(true);
        },
        (err) => {
          if (err.response.data.Error) {
            const errorMessage = err.response.data.message;
            setErrorMessage(errorMessage);
          } else {
            setErrorMessage('Opss... something went wrong :/');
          }
        },
      )
      .then(() => setIsLoading(false));
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

  if (isLoading) return <div className="container">Loading...</div>;

  if (isUserCreated)
    return (
      <div className="container">
        <p>
          Congratulations! Your user <strong>{username}</strong> was created :D
        </p>
        <Button
          onClick={handleRedirection}
          text="Go to the wall"
          backgroundColor="rgb(12, 33, 33)"
          color="rgb(40, 162, 209)"
        />
      </div>
    );

  return (
    <div className="container">
      <h2>Register your account</h2>
      <form onSubmit={handleSubmit} className="flex-column">
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
        <input type="submit" value="Register" className="submit-button" />
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SignUp;
