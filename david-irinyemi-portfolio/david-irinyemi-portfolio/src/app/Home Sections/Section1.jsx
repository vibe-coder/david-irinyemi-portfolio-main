import './Styles/Section1.scss'


const Section1 = () => {
  return(
    <section className="pt-5 h-[85vh]">
      <div id='wrapper' className='h-full'>
        <div id='scroll' className='font h-[33rem]'>
          <div id='to-left' className="mt-[-30px] h-[14rem]">
            <h1 className="text-[14rem]  text-text-gray font-extrabold m-0 uppercase">Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer</h1>
          </div>

          <div id='to-right' className=''>
          <h1 className="text-[14rem]  text-text-gray font-extrabold m-0 uppercase">Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer</h1>
          </div>
        </div>

        <div className='px-8'>
          <p className='text-burnt-orange text-center font-sans font-normal text-lg'><span className='font-bold'>Creative Frontend Developer</span> specializing in designing & developing user-friendly and easy-to-navigate user platforms.</p>
        </div>

        <div id='scroll-down-div' className='font px-8 flex flex-col justify-between items-center mt-10'>
            <p className='font-sans font-bold text-sm text-text-gray'>Scroll Down</p>
            <div className='h-10 w-10 border border-text-gray rounded-3xl mt-2 flex justify-center items-start overflow-hidden'>
              <p id='arrow' className='text-3xl text-text-gray'>&#8675;</p>
            </div>
        </div>
      </div>
    </section>
  )
}


export default Section1;