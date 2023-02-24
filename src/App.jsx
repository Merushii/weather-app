import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

const API_KEY = "54b524c4bb2ab911677cba9e57b9a6a2"
function App() {
  
  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temps, setTemps] = useState()
  const [degrees, setDegrees] = useState(true)

  const succes = (e) => {
    const newCoords = {
      lat: e.coords.latitude,
      lon: e.coords.longitude
    }
    setCoords(newCoords)
  }

  const handleClick = () => {
    setDegrees(!degrees)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if(coords){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`)
        .then((res) => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(2) + "°C";
          const farenheit = (1.8*(res.data.main.temp - 273) + 32).toFixed(2) + "°F";
          const newTemps = {celsius, farenheit}
          setTemps(newTemps)
          }
        )
        .catch((err) => console.log(err))
    }
  }, [coords])
  

  return (
    <div className="App">
      {weather ? <WeatherCard weather = {weather} temps = {temps} degrees={degrees} handleClick = {handleClick}/> : <h1 className='loader'><i class='bx bxs-sun' ></i></h1>}
    </div>
  )
}

export default App
