function Footer() {
    return (
      <>
        <section className="footer w-full flex justify-center pt-4 font-Roboto-slab">
          <div className="w-[90%] h-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div className="p-4 flex justify-center flex-col sm:justify-start">
              <h1 className="text-lg text-white mb-2">Explore</h1>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Crypto Portfolio Tracker</a>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Earn</a>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Blog</a>
            </div>
            <div className="p-4 flex justify-center flex-col sm:justify-start">
              <h1 className="text-lg text-white mb-2">Company</h1>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Product Updates</a>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Pricing</a>
            </div>
            <div className="p-4 flex justify-center flex-col sm:justify-start">
              <h1 className="text-lg text-white mb-2">Useful Tools</h1>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Crypto Profit calculator</a>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Impermanent Loss Calculator</a>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Crypto Converter</a>
            </div>
            <div className="p-4 flex justify-center flex-col sm:justify-start">
              <h1 className="text-lg text-white mb-2">Policies</h1>
              <a href="..." className="text-gray-500 hover:text-blue-700 duration-300">Disclaimer</a>
            </div>
          </div>
        </section>
      </>
    )
  }
   
export default Footer