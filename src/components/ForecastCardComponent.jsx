const ForecastCardComponent = () => {
	return (
		<div className='flex flex-col w-[200px] h-[150px] rounded-lg overflow-hidden border border-1 border-gray-200 shadow-md'>
			<div className='flex flex-row justify-center bg-red-700 border-b border-gray-900 shadow-md border-1'>
				<span className='w-1/6 px-2 py-1 my-1 font-bold text-center text-black bg-white rounded-lg'>
					24
				</span>
			</div>

			<div className='flex justify-evenly item-center'>
				<div>hola</div>
				<div>14.1 °C</div>
			</div>
		</div>
	)
}

export default ForecastCardComponent
