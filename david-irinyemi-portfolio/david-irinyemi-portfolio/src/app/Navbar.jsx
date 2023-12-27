import { Inter, Work_Sans } from 'next/font/google'
import "./Styles/NavBar.scss"

const worksans = Work_Sans({ 
  subsets: ['latin'],
  // display: 'swap'
})


const NavBar = () => {
  return(
    <nav className="py-5 w-screen border-b font-sans border-white flex justify-between relative">
      <h1 className="text-white text-xl ml-8">DI.</h1>

      <div className="right-section-wrapper">
        <input id='input' type="checkbox" className='absolute right-8 z-[1]'/>

        {/* <p className='pl-10'>Click</p> */}
        
        <div id='menu-button-wrapper' className='text-md font-light flex items-center justify-center rounded-3xl absolute right-8 top-0 h-[28px] w-[28px] '>
          <p className='text-md font-bold'>M</p>
        </div>
        
        <div id='menu-list' className="menu-list border-l border-b border-white flex-1 h-[300px] w-80 right-0 top-[50px] absolute z-[3] px-8 py-8 flex flex-col gap-8 bg-gray">
          <a href="/">About Me</a>
          <a href="/">Projects</a>
          <a href="/">Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;