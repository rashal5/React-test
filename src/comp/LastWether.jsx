import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';


function LastWether() {
    
    const [cityName, setCityName] = useState('');
    const [weatherinfo, storeData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const putname =()=>{
        setCityName(e.target.value);
    };
    const checkWeather =()=>{
        setError(null);
        setLoading(true);

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ef3dd40baef7d4b77d137ab2cf46ed38`)
            .then(response => {
                storeData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error in the data', error);
                setError(error);
                setLoading(false);
            });
    };
  return (
    <div>
         <label htmlFor="inputText">Enter city name</label>
            <input
                type="text"
                className="textarea"
                id="inputText"
                name="inputText"
                placeholder="Enter city name here"
                value={cityName}
                onChange={putname}
            />
            <button onClick={checkWeather}>Get Weather</button>

            {loading && <div>Loading...</div>}
            {error && <div>Error loading data: {error.message}</div>}
            {weatherinfo && (
                <ul>
                    <li>Weather: {weatherinfo.weather[0].main} - {weatherinfo.weather[0].description}</li>
                    <li>Humidity: {weatherinfo.main.humidity}%</li>
                    <li>Humidity: {weatherinfo.main.humidity}%</li>
                    <li>Wind Speed: {weatherinfo.wind.speed} m/s</li>
                </ul>
            )}
        </div>
   
  )
}

export default LastWether