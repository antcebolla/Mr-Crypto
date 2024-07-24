import Logo from "../assets/logo"
import Twitter from "../assets/twitter"
import Facebook from "../assets/facebook"
import Reddit from "../assets/Reddit"

function Nav() {
  return (
    <>
      <nav className="font-kanit-black flex flex-wrap justify-between py-6 px-4 items-center gap-x-7">
        <div className="flex items-center text-white">
          <Logo/>
          <h1 className="font-kanit-black text-3xl">Mr.Crypto</h1>
        </div>
        <ul className="text-white text-xl flex flex-grow max-w-[450px] justify-between" id="nav-links">
            <li className="nav-link border-b-transparent border-b-4 hover:border-b-purple-400 hover:border-b-4 hover:cursor-pointer duration-200">Home</li>
            <li className="nav-link border-b-transparent border-b-4 hover:border-b-purple-400 hover:border-b-4 hover:cursor-pointer duration-200">Currencies</li>
            <li className="nav-link border-b-transparent border-b-4 hover:border-b-purple-400 hover:border-b-4 hover:cursor-pointer duration-200">News</li>
        </ul>
        <ul className="text-white flex gap-3" id="nav-socials">
          <li className="duration-200 ease-in-out hover:text-purple-400 hover:cursor-pointer"><a><Twitter></Twitter></a></li>
          <li className="duration-200 ease-in-out hover:text-purple-400 hover:cursor-pointer"><Facebook></Facebook></li>
          <li className="duration-200 ease-in-out hover:text-purple-400 hover:cursor-pointer"><Reddit></Reddit></li>
        </ul>
      </nav>
    </>
  )
}
  
export default Nav