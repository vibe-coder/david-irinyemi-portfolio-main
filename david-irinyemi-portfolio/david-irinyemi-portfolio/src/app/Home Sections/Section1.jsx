import './Styles/Section1.scss'


const Section1 = () => {
  return(
    <section className="pt-5 h-[85vh] md:h-[90vh]">
      <div id='wrapper' className='h-full'>
        <div id='scroll' className='font h-[33rem] md:h-[48rem]'>
          <div id='to-left' className="mt-[-30px] h-[14rem] md:h-[20rem] md:mt-[-50px]">
            <h1 className="text-[14rem] text-text-gray font-extrabold m-0 uppercase md:text-[20rem]">Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer</h1>
          </div>

          <div id='to-right' className=''>
            <h1 className="text-[14rem] text-text-gray font-extrabold m-0 uppercase md:text-[20rem]">Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer - Frontend Developer</h1>
          </div>
        </div>

        <div className='px-8 flex justify-center'>
          <p className='text-burnt-orange text-center font-sans font-normal text-lg md:w-[85%] md:text-2xl '><span className='font-bold'>Creative Frontend Developer</span> specializing in designing & developing user-friendly and easy-to-navigate user platforms.</p>
        </div>

        <div id='scroll-down-div' className='font px-8 flex flex-col justify-between items-center mt-10 md:mt-16'>
            <p className='font-sans font-bold text-sm text-text-gray md:text-lg'>Scroll Down</p>
            <div className='h-10 w-10 border border-text-gray rounded-3xl mt-2 flex justify-center items-start overflow-hidden md:mt-4'>
              <p id='arrow' className='text-3xl text-text-gray'>&#8675;</p>
            </div>
        </div>
      </div>
    </section>
  )
}


export default Section1;