import { DailyCardComponent } from "../components/DailyCardComponent"
import FinderLocationComponent from "../components/FinderLocationComponent"
import ForecastListComponent from "../components/ForecastListComponent"

const Main = () => {
	return (
		<div className='h-screen w-screen bg-emerald-700'>
			<FinderLocationComponent />
			<DailyCardComponent />
			<ForecastListComponent />
		</div>
	)
}

export default Main