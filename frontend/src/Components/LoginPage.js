import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError(err.response ? err.response.data : 'Something went wrong');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reg">
        <div className="container mt-5">
          <h2 className="text-center mb-4">Вхід у профіль</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form id="loginForm" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Введіть email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Введіть пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Увійти</button>
          </form>
        </div>
        <div className="container mt-4 mb-5">
          <p className="log text-center" id="reg">Якщо у вас немає профілю, вам потрібно реєструватись. <a href="register.html">Зареєструватись</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
