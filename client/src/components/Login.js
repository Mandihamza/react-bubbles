import React, { useState } from 'react';
import axios from 'axios';

const initialLogin = {
  username: '',
  password: ''
}

const Login = (props) => {
  const [login, setLogin] = useState(initialLogin);

  const handleChange = e => {
    e.persist()
      let value = e.target.value

      setLogin({...login, [e.target.name]: value})
}

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/login', login)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setLogin(initialLogin)
        props.history.push('/bubble-page');
      })
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>User Name:</label>
          <input 
          placeholder="Lambda School"
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
          />
          <label>Password:</label>
          <input 
          label="Enter Password"
          placeholder="i<3Lambd4"
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    </>
  )
};

export default Login;
