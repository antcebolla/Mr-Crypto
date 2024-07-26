function Currency({numberOfCurrency, currencyName, CurrencyPrice, currencyChange}) {
    return (
      <>
        <div className="w-full h-[40px] rounded-t-lg flex">
                <div className="h-full w-[10%] rounded-tl-lg text-white flex justify-center items-center">{numberOfCurrency}</div>
                <div className="h-full w-[50%] rounded-tl-lg text-white flex justify-center items-center">{currencyName}</div>
                <div className="h-full w-[20%] rounded-tl-lg text-white flex justify-center items-center">{CurrencyPrice}$</div>
                <div className="h-full w-[20%] rounded-tl-lg text-white flex justify-center items-center">
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