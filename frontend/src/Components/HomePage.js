import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Опитування про відвідані країни та міста</h1>
          <div className="survey">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="country">Країна, яку ви відвідали:</label>
                  <input type="text" className="form-control" id="country" placeholder="Введіть назву країни" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="city">Місто, яке ви відвідали:</label>
                  <input type="text" className="form-control" id="city" placeholder="Введіть назву міста" />
                </div>
              </div>
              {/* Add the rest of the form fields similarly */}
              <button type="submit" className="btn btn-primary">Відправити</button>
              <button type="button" className="btn btn-success d-none" id="results-btn">Результати</button>
              <button id="showResultsButton" style={{ display: 'none' }}>Результати</button>
              <div id="resultsContainer"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
