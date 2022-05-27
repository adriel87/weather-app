const ForecastCardComponent = ({ children, day, degrees }) => {
  return (
    <div className="flex flex-col w-[200px] h-[150px] rounded-lg overflow-hidden box-shadow-md snap-center">
      <div className="flex flex-row justify-center bg-red-700 border-b border-gray-900 shadow-md border-1">
        <span className="w-1/6 px-2 py-1 my-1 font-bold text-center text-black bg-white/80 rounded-lg font-Ubuntu-Condensed">
          {day ?? '?'}
        </span>
      </div>

      <div className="flex h-full justify-evenly item-center bg-gradient-to-r from-zinc-50/50 to-zinc-100/80">
        {children}
        <span className="my-auto text-2xl font-semibold font-Ubuntu-Condensed text-neutral-700">
          {degrees ?? '?'} °C
        </span>
      </div>
    </div>
  )
}

export default ForecastCardComponent
