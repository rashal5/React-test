import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './we.css'; // Custom styles

const Wethar = () => {
    const [cityName, setCityName] = useState('');
    const [weatherinfo, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleTextChange = (e) => {
        setCityName(e.target.value);
    };

    const fetchWeather = () => {
        setLoading(true);
        setError(null);

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ef3dd40baef7d4b77d137ab2cf46ed38`)
            .then(response => {
                setWeatherData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('invalid location or error in server', error);
                setError(error);
                setLoading(false);
            });
    };
  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="4">
            <div className="login-form">
              <h2 className="text-center">Login</h2>
                  <Form.Label><label htmlFor="inputText">Enter the city name</label>
            <input
                type="text"
                className="textarea"
                id="inputText"
                name="inputText"
                placeholder="Enter city name here"
                value={cityName}
                onChange={handleTextChange}
            /></Form.Label>
                <div>
            
            <button onClick={fetchWeather}>Get Weather</button><br />

            {loading && <div>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner></div>}
            {error && <div>Error loading data: {error.message}</div>}
            {weatherinfo && (
                <ul>
                    <li>Weather: {weatherinfo.weather[0].main} - {weatherinfo.weather[0].description}</li>
                    <li>Humidity: {weatherinfo.main.humidity}%</li>
                    <li>Humidity: {weatherinfo.main.temp}%</li>     
                    <li>Wind Speed: {weatherinfo.wind.speed} m/s</li>
                </ul>
            )}
        </div>

                <Button variant="primary" type="submit" block>
                  Submit
                </Button>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Wethar;
