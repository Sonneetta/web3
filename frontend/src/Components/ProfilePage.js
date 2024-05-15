import React from 'react';
import Navbar from './Navbar';

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container_profile">
        <h2>Профіль користувача</h2>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Ім'я</th>
              <td id="userName"></td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td id="userEmail"></td>
            </tr>
            <tr>
              <th scope="row">Стать</th>
              <td id="userGender"></td>
            </tr>
            <tr>
              <th scope="row">Дата народження</th>
              <td id="userDob"></td>
            </tr>
          </tbody>
        </table>
        <button id="editProfileButton" className="btn btn-secondary my-3">Змінити профіль</button>
        <form id="editProfileForm" className="d-none">
          <label htmlFor="name" className="form-label">Ім'я:</label>
          <input type="text" id="name" name="name" className="form-control mb-3" required />
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-control mb-3" required />
          <label htmlFor="gender" className="form-label">Стать:</label>
          <select id="gender" name="gender" className="form-control mb-3" required>
            <option value="Жіноча">Жіноча</option>
            <option value="Чоловіча">Чоловіча</option>
            <option value="Інше">Інше</option>
          </select>
          <label htmlFor="dob" className="form-label">Дата народження:</label>
          <input type="date" id="dob" name="dob" className="form-control mb-3" required />
          <button type="submit" className="btn btn-success">Зберегти зміни</button>
        </form>
      </div>
      <div className="container mt-4 mb-5">
        <p className="log text-center">Ваші дані в безпеці</p>
      </div>
    </div>
  );
};

export default ProfilePage;
