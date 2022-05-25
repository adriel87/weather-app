import { DailyCardComponent } from "../components/DailyCardComponent"
import FinderLocationComponent from "../components/FinderLocationComponent"
import ForecastListComponent from "../components/ForecastListComponent"

const Main = () => {
	return (
		<>
			<FinderLocationComponent />
			<DailyCardComponent />
			<ForecastListComponent />
		</>
	)
}

export default Main
