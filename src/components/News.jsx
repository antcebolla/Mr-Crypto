import { useState, useEffect } from "react"
import NewsCard from "./NewsCard"
import { mock } from "../../mocks/newsMock"

function News() {
    const [news, setNews] = useState([])

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

        const response =  await fetch('https://openapiv1.coinstats.app/news', options)

        if(response.status === 200){
          const data = await response.json()
            
          console.log(data.result)
          setNews(data.result)
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
        <section className="min-h-screen min-w-full flex justify-center items-center flex-col mb-7" id="news">
        <h1 className="text-white font-Roboto-slab text-5xl my-7">CryptoNews</h1>
        <div className="h-[600px] w-[90%] bg-gray-900 rounded-xl CurrenciesCont font-Roboto-slab overflow-auto flex  flex-col p-7">
            {
                news.map((el, index)=>{
                    return <NewsCard title={el.title} photo={el.imgUrl} tags={el.searchKeyWords} newsLink={el.shareURL} key={index}/>
                })
            }
        </div>
        </section>
      </>
    )
  }
   
export default News