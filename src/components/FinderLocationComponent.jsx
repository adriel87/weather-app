import { useState } from 'react'
import debounce from 'lodash.debounce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

const FinderLocationComponent = () => {
	const [location, setLocation] = useState('')
	const reverseUrl = 'https://geocode.maps.co/reverse?'
	const getAddress = (latitude, longitude) => {
		fetch(`${reverseUrl}lat=${latitude}&lon=${longitude}`)
			.then(response => response.json())
			.then(data => {
				const address = `${data.address.city}, ${data.address.country_code}`
				setLocation(address)
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
		// TODO: si la location está vacía, busqueda por GPS (getPosition) si no, busqueda por la dirección introducida, la cuestión es que hay que buscar por $location siempre.
		location === '' ? getPosition() : setLocation(e.target.value)
		getPosition()
	}
	const debounceOnChange = debounce(handlerLocation, 1000)
	return (
		<div className='flex flex-row my-2 py-2 w-screen items-center justify-evenly'>
			<form>
				<input
					type='search'
					placeholder='Introduce una ciudad...'
					value={location}
					onChange={debounceOnChange}
					className='px-2 py-1 w-[18rem] ring-1 ring-sky-400 focus:ring-2 rounded-lg shadow-inner shadow-md'
					id='location'
				/>
			</form>
			<div className='py-2 px-3 bg-white ring-1 ring-sky-400 focus:ring-sky-200 rounded-full shadow-md' onClick={handlerLocation}>
				<FontAwesomeIcon color='#2563EB' icon={faLocationCrosshairs} />
			</div>
		</div>
	)
}

export default FinderLocationComponent