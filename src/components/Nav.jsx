import Logo from "../assets/logo"
import Twitter from "../assets/twitter"
import Facebook from "../assets/facebook"
import Reddit from "../assets/Reddit"

function Nav() {
  return (
    <>
      <nav  id="navComp" className="w-full z-10 fixed font-kanit-black flex flex-wrap justify-between pt-6 pb-2 px-4 items-center gap-x-7 ">
        <div className="flex items-center text-white w-full sm:w-auto justify-center mb-7 sm:mb-0">
          <Logo/>
          <h1 className="font-kanit-black text-3xl">Mr.Crypto</h1>
        </div>
        <ul className="text-white text-xl px-5 sm:px-0 flex flex-grow sm:max-w-[450px] sm:h-auto h-full justify-between" id="nav-links">
            <li className="nav-link border-b-transparent border-b-4 hover:border-b-blue-600 hover:border-b-4 hover:cursor-pointer duration-200"><a href="#hero">Home</a></li>
            <li className="nav-link border-b-transparent border-b-4 hover:border-b-blue-600 hover:border-b-4 hover:cursor-pointer duration-200"><a href="#currencies">Currencies</a></li>
            <li className="nav-link border-b-transparent border-b-4 hover:border-b-blue-600 hover:border-b-4 hover:cursor-pointer duration-200"><a href="#news">News</a></li>
        </ul>
        <ul className="text-white gap-3 hidden sm:flex" id="nav-socials">
          <li className="duration-200 ease-in-out hover:text-blue-600 hover:cursor-pointer"><a><Twitter></Twitter></a></li>
          <li className="duration-200 ease-in-out hover:text-blue-600 hover:cursor-pointer"><Facebook></Facebook></li>
          <li className="duration-200 ease-in-out hover:text-blue-600 hover:cursor-pointer"><Reddit></Reddit></li>
        </ul>
      </nav>
    </>
  )
}
  
export default Nav