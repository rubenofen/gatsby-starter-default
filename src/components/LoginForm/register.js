import React, { useState, useContext } from 'react';

import FirebaseContext from '../../context/Firebase';

const LoginForm = ({ toggleIsLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);

  const registerHandler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('[register error]', errorCode, errorCode);
      });
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          className="p-2 m-2 text-black"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className="p-2 m-2 text-black"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className="p-2 m-2 text-black"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="button" onClick={registerHandler}>
        REGISTER
      </button>
      <p>
        If already have an account{' '}
        <button type="button" onClick={toggleIsLogin}>
          SignIn
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
