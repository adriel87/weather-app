import { useState } from "react"

const FinderLocationComponent = () => {
	const [location, setLocation] = useState("")

	const handlerLocation = e => {
		e.preventDefault()
		console.log(e)
		setLocation(e.target.value)
	}
	return (
		<div className='container'>
			<form>
				<input
					placeholder='introduce una cidad...'
					value={location}
					onChange={handlerLocation}
					id='location'
				/>
			</form>
			<div className='icon'>Icon-ActualLocation</div>
		</div>
	)
}

export default FinderLocationComponent
