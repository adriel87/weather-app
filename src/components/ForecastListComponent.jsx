import ForecastCardComponent from './ForecastCardComponent'
import WeatherIcon from '../assets/icons/overcast-day-drizzle.svg'
import WeatherIconComponent from './WeatherIconComponent'

//TODO establecer las propiedades
//! array de objetos con la siguiente estrucutura

const data = [
  {
    day: 24,
    iconUrl: 'the url or id we need to talk about it',
    degrees: 14.1
  },
  {
    day: 25,
    iconUrl: 'the url or id we need to talk about it',
    degrees: 18.1
  },
  {
    day: 26,
    iconUrl: 'the url or id we need to talk about it',
    degrees: 24.1
  }
]

const ForecastListComponent = (props) => {
  return (
    <div className="relative overflow-auto no-scrollbar">
      <section className="relative flex flex-no-wrap items-start gap-12 mx-8 overflow-x-scroll scrolling-touch min-w-fit scroll-smooth snap-x snap-proximity">
        {data.map((item, index) => {
          return (
            <ForecastCardComponent day={item.day} degrees={item.degrees}>
              <WeatherIconComponent iconUrl={WeatherIcon} altText="cloudy" />
            </ForecastCardComponent>
          )
        })}
      </section>
    </div>
  )
}

export default ForecastListComponent
