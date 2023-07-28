import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
import {useCallback} from 'react';

export default function Test03() {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = 'e2ca3643c96776f5931fc7cbfd81e523';
    const city = 'Fortaleza,br';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    const getWeatherData = useCallback(async () => {
        try {
            const response = await axios.get(
                apiUrl,
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados de tempo:', error);
        }
    }, [apiUrl]);

    useEffect(() => {
        getWeatherData();
    }, [getWeatherData]);

    const name = weatherData?.name;
    const temperature = weatherData?.main.temp;
    const weatherDescription = weatherData?.weather[0]?.description;
    return (
        <div>
            <h1>Test 3: Consuming an API</h1>
            <div>
                <h2>Weather forecast for {name}</h2>
                <p>Description: {weatherDescription}</p>
                <p>Temperature: {temperature}°C</p>
            </div>
        </div>
    );
}
