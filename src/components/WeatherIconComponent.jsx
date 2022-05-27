const WeatherIconComponent = ({ iconUrl, altText }) => {
  return (
    <section
      id="weatherIcon"
      className="flex flex-col items-center justify-center"
    >
      <img src={iconUrl} className="object-cover w-20" alt={altText} />
    </section>
  )
}

export default WeatherIconComponent
