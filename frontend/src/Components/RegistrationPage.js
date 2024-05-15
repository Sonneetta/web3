import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        email,
        gender,
        dob,
        password
      });
    } catch (err) {
      setError(err.response ? err.response.data : 'Something went wrong');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reg">
        <div className="container mt-5">
          <h2 className="text-center mb-4">Реєстрація користувача</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form id="registrationForm" onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Ім'я:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Введіть ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                placeholder="Введіть електронну пошту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className="text-danger" id="emailError"></small>
            </div>
            <div className="form-group">
              <label htmlFor="gender">Стать:</label>
              <select
                className="form-control"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Оберіть стать</option>
                <option value="Чоловіча">Чоловіча</option>
                <option value="Жіноча">Жіноча</option>
                <option value="Інше">Інше</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Дата народження:</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Зареєструватися</button>
          </form>
        </div>
        <div className="container mt-4 mb-5">
          <p className="text-center" id="vhid">Якщо у вас вже є профіль, вам не потрібно реєструватись. <a href="login.html">Увійдіть</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
