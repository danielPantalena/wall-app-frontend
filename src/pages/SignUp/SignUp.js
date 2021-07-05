import React, { useState } from 'react';
import wallAppApi from '../../services/api';

const SignUp = () => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { username, email, password } = userData;

  const handleChange = ({ target: { name, value } }) => {
    const newUserData = { ...userData, [name]: value };
    return setUserData(newUserData);
  };

  const validatePassword = () => password === passwordConfirmation;

  const createUser = (requestData) => wallAppApi.post('users/', requestData);

  const handleSubmit = (event) => {
    event.preventDefault();
    return (
      validatePassword() &&
      createUser(userData).then(
        (response) => console.log(response.data),
        (err) => console.log('Err', err.message),
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleChange} name="username" required />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={handleChange} name="email" required />
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
            onChange={({ target: { value } }) => setPasswordConfirmation(value)}
            name="password-confirmation"
            required
          />
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUp;
