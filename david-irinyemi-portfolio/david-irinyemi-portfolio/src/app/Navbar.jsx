import { Inter, Work_Sans } from 'next/font/google'
import "./Styles/NavBar.scss"

const worksans = Work_Sans({ 
  subsets: ['latin'],
  // display: 'swap'
})


const NavBar = () => {
  return(
    <nav className="py-5 w-screen border-b-2 font-sans border-burnt-orange flex justify-between relative">
      <h1 className="text-burnt-orange text-xl ml-8 md:ml-16">
        <a href="/" className='md:text-4xl font-bold'>DI.</a>
      </h1>

      <div className="right-section-wrapper">
        <input id='input' type="checkbox" className='absolute right-8 h-[28px] w-[28px] md:w-[40px] md:h-[40px] md:right-16 z-[1]'/>

        {/* <p className='pl-10'>Click</p> */}
        
        <div id='menu-button-wrapper' className='text-md font-light flex items-center justify-center rounded-3xl absolute right-8 top-0 h-[28px] w-[28px] md:right-16 md:w-[40px] md:h-[40px] '>
          <p className='text-md font-bold md:text-xl'>M</p>
        </div>
        
        <div id='menu-list' className="border-l-2 border-b-2 border-burnt-orange text-burnt-orange flex-1 h-[245px] w-[90%] md:w-[50%] lg:w-[30%] right-0 top-[50px] absolute z-[3] px-14 py-8 flex flex-col gap-8 bg-peach text-lg font-bold justify-center md:text-xl md:top-[62.8px]">
          <a href="/about" className='transition duration-200 ease-in-out w-[40%] hover:text-text-gray '>About Me</a>
          <a href="/projects" className='transition duration-200 ease-in-out w-[40%] hover:text-text-gray '>Projects</a>
          <a href="/" className='transition duration-200 ease-in-out w-[40%] hover:text-text-gray '>Resume</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;