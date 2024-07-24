function Hero() {
    return (
      <>
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-white font-Roboto-slab font-bold text-5xl text-center max-w-[750px]">Check And Study Your Favourite Cryptocurrencies In One Place.</h1>
          <h5 className="mt-4 text-gray-400 font-Roboto-slab">Bitcoin, Ethereum, Dogecoin and any other currency you need to know.</h5>
          <div className="flex justify-center items-center gap-3 pt-3 font-Roboto-slab">
            <a href="..." className="bg-blue-600 duration-200 hover:text-black ease-in hover:bg-white px-6 py-3 text-white rounded-full">Get Started</a>
            <a href="..." className="bg-gray-600 hover:text-black duration-200 ease-in hover:bg-white px-6 py-3 text-white rounded-full">Contact Us</a>
          </div>
        </div>
      </>
    )
  }
   
export default Hero