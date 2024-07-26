import { useEffect, useState } from "react"
import Currency from "./Currency"


function Currencies() {
  const [currencies, setCurrencies] = useState([])

  useEffect(()=>{
    const getData = async () =>{
      try{
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-API-KEY': 'Ib/GRDh2XZx9ufuH6LQqz7MMD5c3OXX6t68g/jBxU9I='
          }
        }

        const response =  await fetch('https://openapiv1.coinstats.app/coins', options)

        if(response.status === 200){
          const data = await response.json()

          setCurrencies(data.result)
        }
        else{
          throw new Error('failed to fetchh data')
        }

      }
      catch(error){
        console.log(error)
      }
    }

    getData()
  }, [])

  return (
      <>
        <section id="currencies" className="min-h-screen min-w-full flex justify-center items-center flex-col">
            <h1 className="text-white font-Roboto-slab text-5xl my-7">Cryptocurrencies & Their value</h1>
            <div className="h-[600px] min-w-[90%] bg-gray-900 rounded-xl CurrenciesCont font-Roboto-slab overflow-auto">
              <div className="w-full border-b-slate-600 border-b-[1px] h-[40px] rounded-t-lg flex">
                <div className="h-full w-[10%] rounded-tl-lg text-white flex justify-center items-center">#</div>
                <div className="h-full w-[50%] rounded-tl-lg text-white flex justify-center items-center">Name</div>
                <div className="h-full w-[20%] rounded-tl-lg text-white flex justify-center items-center">Price</div>
                <div className="h-full w-[20%] rounded-tl-lg text-white flex justify-center items-center">24h Change</div>
              </div>
              {
                currencies.map((currency, index)=>{
                  return <Currency numberOfCurrency={index+1} currencyName={currency.name} CurrencyPrice={currency.price.toFixed(3)} currencyChange={currency.priceChange1d}/>
                })
              }
            </div>
        </section>
      </>
    )
  }
   
export default Currencies