import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import debounce from 'lodash.debounce'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const FinderLocationComponent = () => {
  const [location, setLocation] = useState('')
  const reverseUrl = 'https://geocode.maps.co/reverse?'
  const getAddress = (latitude, longitude) => {
    fetch(`${reverseUrl}lat=${latitude}&lon=${longitude}`)
      .then((response) => response.json())
      .then((data) => {
        const address = `${data.address.city}, ${data.address.country_code}`
        setLocation(address)
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
    // TODO: si la location está vacía, busqueda por GPS (getPosition) si no, busqueda por la dirección introducida, la cuestión es que hay que buscar por $location siempre.
    location === '' ? getPosition() : setLocation(e.target.value)
    getPosition()
  }
  const debounceOnChange = debounce(handlerLocation, 1000)
  return (
    <div className="flex flex-row items-center w-screen pt-4 mb-2 justify-evenly">
      <form>
        <input
          type="search"
          placeholder="Introduce una ciudad..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-2 py-1 w-[15.5rem] ring-1 ring-sky-400 focus:ring-2 rounded-lg shadow-md"
          id="location"
        />
      </form>
      <div
        className="px-3 py-2 bg-white rounded-full shadow-md ring-1 ring-sky-400 focus:ring-sky-200"
        onClick={handlerLocation}
      >
        <FontAwesomeIcon color="#2563EB" icon={faLocationCrosshairs} />
      </div>
    </div>
  )
}

export default FinderLocationComponent
