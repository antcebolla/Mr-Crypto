function Hero() {
    return (
      <>
        <div id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-center max-w-[100vw]">
          <h1 className="text-white font-Roboto-slab font-bold text-3xl sm:text-5xl text-center max-w-[280px] sm:max-w-[750px]">Check And Study Your Favourite Cryptocurrencies In One Place.</h1>
          <h5 className="mt-4 text-gray-400 font-Roboto-slab text-center max-w-[280px] sm:max-w-[750px]">Bitcoin, Ethereum, Dogecoin and any other currency you need to know.</h5>
          <div className="flex justify-center items-center gap-3 pt-3 font-Roboto-slab">
            <a href="..." className="text-center bg-blue-600 duration-200 hover:text-black ease-in hover:bg-white px-6 py-3 text-white rounded-full">Get Started</a>
            <a href="..." className="text-center bg-gray-600 hover:text-black duration-200 ease-in hover:bg-white px-6 py-3 text-white rounded-full">Contact Us</a>
          </div>
          <svg viewBox="0 0 1024 1024" className="absolute bottom-3" id="heroArrow" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg>
        </div>
      </>
    )
  }
   
export default Hero