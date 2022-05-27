import { DailyCardComponent } from '../components/DailyCardComponent'
import FinderLocationComponent from '../components/FinderLocationComponent'
import ForecastListComponent from '../components/ForecastListComponent'

const Main = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-emerald-700 not-prose">
      <FinderLocationComponent />
      <DailyCardComponent />
      <ForecastListComponent />
    </div>
  )
}

export default Main
