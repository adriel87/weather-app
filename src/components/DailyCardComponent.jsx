import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WeatherIcon from '../assets/icons/overcast-day-drizzle.svg'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
export const DailyCardComponent = () => {
  return (
    <div className="flex justify-center pt-4 mb-12 h-cover">
      <section
        id="infoButton"
        className="w-10/12 overflow-hidden rounded-lg shadow-md bg-white/50 backdrop-blur-md shadow-white/40"
      >
        <div className="absolute right-0">
          <div className="px-3 pb-1 bg-blue-600 rounded-tr-lg rounded-bl-lg">
            <FontAwesomeIcon color="white" icon={faInfo} />
          </div>
        </div>
        <section id="locationTexts" className="flex-col justify-center">
          <span className="block mt-1 text-3xl text-center capitalize font-Ubuntu-Condensed text-shadow-sm">
            España
          </span>
          <span className="block text-2xl text-center capitalize font-Ubuntu-Condensed text-shadow-sm">
            Las Palmas de Gran Canaria
          </span>
        </section>
        <section id="weatherIcon" className="flex justify-center -mt-14">
          <img
            src={WeatherIcon}
            className="object-cover w-auto "
            alt="weather"
          />
        </section>
        <section id="weatherCondition">
          <span className="block -mt-16 text-2xl text-center capitalize font-Ubuntu-Condensed text-shadow-sm">
            Llovizna
          </span>
        </section>
        <section id="currentTemperature" className="mt-2">
          <span className="block font-bold text-center text-white text-7xl font-Ubuntu-Condensed text-shadow-sm">
            24 °C
          </span>
        </section>
        <section id="minMaxTemperature" className="flex justify-between m-6">
          <span className="text-5xl text-blue-600 font-Ubuntu-Condensed">
            11.1 °C
          </span>
          <span className="text-5xl text-red-600 font-Ubuntu-Condensed">
            26.6 °C
          </span>
        </section>
      </section>
    </div>
  )
}
