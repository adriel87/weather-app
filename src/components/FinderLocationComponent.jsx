import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const RAPID_API = 'dc50054660msh4567f1c9d39eb31p10e902jsn53b1ef00ca9b'
const FinderLocationComponent = () => {
  const [forecast, setForecast] = useState([])
  const [currentDay, setCurrentDay] = useState({})
  const [location, setLocation] = useState('')

  const getWeatherData = (location) => {
    getForecastWeather(location)
  }

  // const setWeatherData = (data) => {
  //   setRealTimeWeatherData(data)
  //   setForecastWeatherData(data)
  // }

  const setForecastWeatherData = (data) => {
    const { maxtemp_c, mintemp_c, condition } = data.forecast.forecastday[0].day

    setCurrentDay({
      ...currentDay,
      maxTemp: maxtemp_c,
      minTemp: mintemp_c
    })
    const { forecastday } = data.forecast
    setForecast(forecastday)
  }

  const setRealTimeWeatherData = (data) => {
    const { condition, temp_c, is_day } = data.current
    const { location } = data
    setCurrentDay({
      name: location.name,
      country: location.country,
      region: location.region,
      condition: condition.text,
      actual_temp: temp_c,
      is_day: is_day,
      icon: {
        code: condition.code,
        icon: condition.icon,
        text: condition.text
      }
    })
  }

  const getForecastWeather = (location) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': RAPID_API
      }
    }

    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?lang=es&q=${location}&days=3`,
      options
    )
      .then((response) => response.json())
      .then((response) => setForecastWeatherData(response))
      .catch((err) => console.error(err))
  }

  const getRealTimeWeather = (location) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': RAPID_API
      }
    }

    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?lang=es&q=${location}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setRealTimeWeatherData(response))
      .catch((err) => console.error(err))
  }

  const reverseUrl = 'https://geocode.maps.co/reverse?'

  const getAddress = (latitude, longitude) => {
    fetch(`${reverseUrl}lat=${latitude}&lon=${longitude}`)
      .then((response) => response.json())
      .then((data) => {
        const address = `${data.address.city}, ${data.address.country_code}`
        setLocation(address)
        getWeatherData(address)
      })
      .catch((error) => console.error(error))
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(success, error, options)
  }
  const success = (pos) => {
    const latitude = pos.coords.latitude
    const longitude = pos.coords.longitude
    getAddress(latitude, longitude)
  }
  const error = (e) => {
    console.error(`GeoError: ${e.message}`)
  }
  const handlerLocation = (e) => {
    e.preventDefault()
    // TODO: si la location está vacía, busqueda por GPS (getPosition) si no, busqueda por la dirección introducida, la cuestión es que hay que buscar por $location siempre.

    location === '' ? getPosition() : getWeatherData(location)
  }

  return (
    <div className="flex flex-row w-screen pt-4 mb-2">
      <form
        className="flex items-center w-full justify-evenly"
        onSubmit={handlerLocation}
      >
        <input
          type="search"
          placeholder="Introduce una ciudad..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-3 py-2 w-[15.5rem] rounded-lg shadow-white/20 shadow-md"
          id="location"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-white rounded-full shadow-md shadow-white/20"
        >
          <FontAwesomeIcon color="#2563EB" icon={faLocationCrosshairs} />
        </button>
      </form>
    </div>
  )
}

export default FinderLocationComponent
