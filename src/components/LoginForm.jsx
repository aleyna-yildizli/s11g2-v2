import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('https://nextgen-project.onrender.com/api/s11d2/login', form)
      .then((res) => {
        console.log('Login oldu: ', res.data);
        if (response.status === 200) {
          localStorage.setItem('s11gg2', JSON.stringify(response.date));
        }
      })
      .catch((error) => console.error('Login Hata: ', error));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
