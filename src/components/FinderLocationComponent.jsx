import { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

// library.add(faLocationCrosshairs)

const FinderLocationComponent = () => {
	const [location, setLocation] = useState("")
	const reverseUrl = 'https://geocode.maps.co/reverse?'
	const getAddress = (latitude, longitude) => {
		fetch(`${reverseUrl}lat=${latitude}&lon=${longitude}`)
			.then(response => response.json())
			.then(data => {
				setLocation(`${data.address.city}, ${data.address.country_code}`)
			})
			.catch(error => console.error(error))
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

	const handlerLocation = e => {
		e.preventDefault()
		// TODO: si la location está vacía, busqueda por GPS (getPosition) si no, busqueda por la dirección introducida, la cuestión es que hay que buscar por $location siempre.
		location === '' ? getPosition() : alert("Please enter a location")
		getPosition()
	}
	return (
		<div className='flex flex-row bg-green-200 py-2 w-screen items-center justify-evenly'>
			<form>
				<input
					placeholder='Introduce una ciudad...'
					value={location}
					onChange={handlerLocation}
					className='px-2 py-1 w-[18rem] ring-1 ring-sky-600 focus:ring-sky-300 rounded-lg shadow-inner shadow-md'
					id='location'
				/>
			</form>
			<div className='py-2 px-3 bg-white rounded-full shadow-md' onClick={handlerLocation}>
				<FontAwesomeIcon icon={faLocationCrosshairs} />
			</div>
		</div>
	)
}

export default FinderLocationComponent