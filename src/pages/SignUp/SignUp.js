import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import wallAppApi from '../../services/api';
import { Button } from '../../components';

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

  const createUser = (requestData) => wallAppApi.post('users/', requestData);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordConfirmation !== password) return setIsPasswordConfirmed(false);
    setIsLoading(true);
    return createUser(userData).then(
      (response) => {
        console.log(response.data);
        setIsLoading(false);
        setIsUserCreated(true);
      },
      (err) => console.error('Error:', err.message),
    );
  };

  if (shouldRedirect) return <Redirect to="/" />;

  if (isLoading) return <div>Loading...</div>;

  if (isUserCreated)
    return (
      <div>
        <p>
          Congratulation! Your user <strong>{username}</strong> was created :D
        </p>
        <Button onClick={() => setShouldRedirect(true)} text="Go to the wall" />
      </div>
    );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleChange} name="username" required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleChange} name="email" required />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={handleChange} name="password" required />
        </label>
        <label>
          Confirm Password:
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
