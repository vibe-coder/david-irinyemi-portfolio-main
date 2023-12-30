import "./Styles/Projects.scss"

const Projects = () => {
  return(
    <section className="text-text-gray">
      <div id='wrapper'>
        <div id='scroll'>
          <div id='to-left'>
            <h1 className="text-[14rem] text-text-gray font-extrabold uppercase"> PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS</h1>
          </div>
        </div>
      </div>

      <div className="px-8">
        <p className="text-center font-sans font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, placeat perspiciatis deleniti fuga libero aliquid tenetur fugit sequi ex corporis id debitis nam dolor a rem optio! Natus, beatae quasi?</p>
      </div>

      <div id='scroll-down-div' className='font px-8 flex flex-col justify-between items-center mt-20'>
        <div className='h-10 w-10 border border-burnt-orange rounded-3xl mt-2 flex justify-center items-start overflow-hidden'>
          <p id='arrow' className='text-3xl text-burnt-orange'>&#8675;</p>
        </div>
      </div>

      <div className="px-8 py-20 grid grid-cols-1 gap-y-5">
        <div className="h-80 flex justify-center items-center bg-text-gray hover:bg-burnt-orange cursor-pointer transition duration-300 ease-in-out">
          <a href="https://vibe-mymoviebox.netlify.app/" target="_blank" className="text-4xl text-peach w-full h-full flex justify-center items-center">MOVIEBOX</a>
        </div>

        <div className="h-80 flex justify-center items-center bg-text-gray hover:bg-burnt-orange cursor-pointer transition duration-300 ease-in-out">
          <a href="https://promage-dashboard.netlify.app/" target="_blank" className="text-4xl text-peach w-full h-full flex justify-center items-center">PROMAGE</a>
        </div>

        <div className="h-80 flex justify-center items-center bg-text-gray hover:bg-burnt-orange cursor-pointer transition duration-300 ease-in-out">
          <a href="https://excal-calculator.netlify.app/" target="_blank" className="text-4xl text-peach w-full h-full flex justify-center items-center">EX.CAL</a>
        </div>

        <div className="h-80 flex justify-center items-center bg-text-gray hover:bg-burnt-orange cursor-pointer transition duration-300 ease-in-out">
          <a href="https://e-learning-website-main.netlify.app/" target="_blank" className="text-4xl text-peach w-full h-full flex justify-center items-center">E-LEARNING</a>
        </div>
      </div>
    </section>
  )
}

export default Projects;