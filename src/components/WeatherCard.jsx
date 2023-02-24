import React from 'react'

const WeatherCard = ({weather, temps, degrees, handleClick}) => {
  

  return (
    <div className='container'>
        <article>
          <div className="weatherCard">
            <h1>Weather App</h1>
            <p className='degrees'>{degrees ? temps.celsius : temps.farenheit}</p>
            <p>{weather.weather[0].main}</p> 
            <div>
              <img src={` http://openweathermap.org/img/wn/${weather.   weather[0].icon}@2x.png`} alt="img" />
            </div>
            <div className="infoWeather">
              <p>{weather.name}, {weather.sys.country}</p>
              <p><i class='bx bx-wind'></i> {weather.wind.speed} m/s</p>
              <p><i class='bx bxs-cloud'></i> {weather.clouds.all}%</p>
              <p>Pressure: {weather.main.pressure} mb</p>
            </div>
          
            <button onClick={handleClick}>°C/°F</button>
          </div>
        </article>
    </div>
  )
}

export default WeatherCard
