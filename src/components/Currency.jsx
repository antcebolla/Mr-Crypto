function Currency({iconOfCurrency, currencyName, CurrencyPrice, currencyChange, currencyNick}) {
    return (
      <>
        <div className="w-full h-[40px] duration-300 flex hover:bg-slate-600">
                <div className="h-full w-[15%] rounded-tl-lg text-white flex justify-center items-center">
                  <img src={iconOfCurrency} className="max-w-7" alt={`${currencyName} icon`} />
                </div>
                <div className="h-full w-[55%] sm:w-[45%] rounded-tl-lg text-white flex justify-center items-center">{currencyName}<span className="hidden sm:inline text-gray-600">-{currencyNick}</span></div>
                <div className="h-full w-[20%] rounded-tl-lg text-white flex justify-center items-center">{CurrencyPrice}$</div>
                <div className="h-full w-[20%] rounded-tl-lg text-white sm:flex hidden justify-center items-center">
                  {currencyChange > 0 ? 
                  <div className="w-70% h-70% bg-green-900  text-green-300 rounded-lg py-1 px-2 ">{currencyChange}%</div>
                  :
                  <div className="w-70% h-70% bg-red-800  text-red-300 rounded-lg py-1 px-2 ">{currencyChange}%</div>
                  }
                </div>
        </div>
      </>
    )
  }
   
export default Currency