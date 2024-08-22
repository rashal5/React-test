import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import './we.css'; 


function Checkwether() {
    const [doc,Setnum ] = useState('normal');
    const [hum,Setnuhm ] = useState('');
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
                let newWeatherinfo=response.data
                setWeatherData(newWeatherinfo);
                Setnum(newWeatherinfo.weather[0].main);
                Setnuhm(newWeatherinfo.main.temp);
                setLoading(false);
                // Setnum(weatherinfo.weather[0].main);
                // Setnuhm(weatherinfo.main.temp);
                // setLoading(false);

            })
            .catch(error => {
                console.error('invalid location or error in server', error);
                setError(error);
                setLoading(false);
            });

        
           
    };
   console.log(hum)

    if (hum>300){
        var ac = 'hot'
    }else{
        var ac = 'cool'
    }
    console.log(ac)
  
   console.log(hum)
    

    return (
        <div className={`${doc}`}  >
            {console.log(doc)}
            
            <label htmlFor="inputText">Enter the city name</label>
            <input
                type="text"
                className="textarea"
                id="inputText"
                name="inputText"
                placeholder="Enter city name here"
                value={cityName}
                onChange={handleTextChange}
            />
            <button onClick={fetchWeather}>Get Weather</button><br />

            <div className={`${ac}`} >
                
            </div>

            {loading && <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>}
            {error && <div>Error loading data: {error.message}</div>}
            {weatherinfo && (
                <ul>
                    <li>Weather: {weatherinfo.weather[0].main} - {weatherinfo.weather[0].description}</li>
                    <li>Humidity: {weatherinfo.main.humidity}%</li>
                    <li>Temp: {weatherinfo.main.temp}°C</li>
                    <li>Wind Speed: {weatherinfo.wind.speed} m/s</li>
                </ul>
            )}
        </div>
    );
};

export default Checkwether;
