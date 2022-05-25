import { DailyCardComponent } from "../components/DailyCardComponent"
import FinderLocationComponent from "../components/FinderLocationComponent"
import ForecastListComponent from "../components/ForecastListComponent"

const Main = () => {
	return (
		<div className="h-full w-full">
			<FinderLocationComponent />
			<DailyCardComponent />
			<ForecastListComponent />
		</div>
	)
}

export default Main
