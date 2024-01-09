

const Footer = () => {
  return(
    <section className="px-8 pb-12 text-text-gray h-[80vh] flex items-end justify-center border-t-2 border-transparent md:h-[70vh] md:px-16 lg:px-24 lg:h-[100vh]">
      <div className='w-full flex flex-col items-center'>
        <div className="flex flex-col items-center">
          <h1 className='tracking-widest text-xl md:text-2xl'>SAY HELLO</h1>
          <a href="mailto:thevibecoder@gmail.com" className=' text-burnt-orange underline text-xl md:text-2xl animation duration-200 ease-in-out hover:text-text-gray'>thevibecoder@gmail.com</a>
        </div>

        <div className='flex flex-row justify-center gap-6 mt-16 md:gap-20 md:w-[30%] lg:w-[50%] text-burnt-orange md:mt-20'>
          <a href="/about" className='transition duration-200 ease-in-out hover:text-text-gray md:text-2xl text-xl'>About Me</a>
          <a href="/projects" className='transition duration-200 ease-in-out hover:text-text-gray md:text-2xl text-xl'>Projects</a>
          <a href="/" className='transition duration-200 ease-in-out hover:text-text-gray md:text-2xl text-xl'>Resume</a>
        </div>

        <div className='flex gap-5 md:mt-7 mt-5'>
          <button className='border-2 border-burnt-orange text-burnt-orange rounded-3xl h-10 w-10 font-bold md:h-12 md:rounded-full md:w-12 md:text-2xl animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray'><a href='https://www.linkedin.com/in/david-irinyemi-395220162/' target='_blank' className='font-bold'>IN</a></button>
          <button className='border-2 border-burnt-orange text-burnt-orange  rounded-3xl h-10 w-10 font-bold md:h-12 md:rounded-full md:w-12 md:text-2xl animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray'><a href='https://github.com/vibe-coder' target='_blank' className='font-bold'>GT</a></button>
          <button className='border-2 border-burnt-orange text-burnt-orange  rounded-3xl h-10 w-10 font-bold md:h-12 md:rounded-full md:w-12 md:text-2xl animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray'><a href='https://twitter.com/vibe_coder' target='_blank' className='font-bold'>X</a></button>
        </div>

        <div className='w-full mb-10 flex justify-center md:mt-20 mt-16'>
          <p className="md:text-2xl text-xl">© David Irinyemi 2023</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;