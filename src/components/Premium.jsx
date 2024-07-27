import Wallet from "../assets/wallet"
import Coin from "../assets/Coin"
import Vector from "../assets/Vector"

function Premium() {
    return (
      <>
        <div className="relative w-full sm:min-h-[90vh] flex flex-col justify-center items-center max-w-[100vw]">
        <h1 className="text-white font-Roboto-slab sm:text-5xl text-3xl my-16 text-center">All-In-One Crypto Tracker</h1>
        <div className="sm:h-[500px] h-fit min-w-[90%] rounded-xl CurrenciesCont font-Roboto-slab overflow-auto flex flex-wrap justify-center items-center ">
            <div className="h-full  w-full sm:w-[55%] flex flex-col items-center justify-start sm:pl-8">
                <div className="h-[32%] w-[100%]  p-6 text-white">
                    <h1 className="flex items-center text-lg w-full"><Wallet/>300+ Wallets/Exchanges</h1>
                    <p className="text-slate-400 text-lg">Track everything wherever you keep it: Binance, Trust Wallet, and others.</p>
                </div>
                <div className="h-[32%] w-[100%] p-6 text-white">
                <h1 className="flex items-center text-lg w-full"><Vector/>1,000+ DeFi Protocols</h1>
                <p className="text-slate-400 text-lg">Track and manage all your DeFi on 1000+ protocols and 10+ chains.</p>
                </div>
                <div className="h-[32%] w-[100%] p-6 text-white">
                <h1 className="flex items-center text-lg w-full"><Coin/>20,000+ Cryptocurrencies</h1>
                <p className="text-slate-400 text-lg">Research, track, and manage any coin, set custom crypto alerts and more.</p>
                </div>
            </div>
            <div className="h-[100%] w-full sm:w-[45%] flex items-center justify-center relative overflow-hidden">
                <img src="../../images/wallet.png" className="w-[29rem] absolute animated" />
            </div>
        </div>
        </div>
      </>
    )
  }
   
export default Premium