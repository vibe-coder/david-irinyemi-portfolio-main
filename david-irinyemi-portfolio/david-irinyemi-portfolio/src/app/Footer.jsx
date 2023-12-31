

const Footer = () => {
  return(
    <section className="px-8 pb-12 text-text-gray h-[80vh] flex items-end border-t-2 border-transparent bg-peach md:h-[70vh] md:px-16 lg:px-24 lg:h-[100vh]">
      <div className='w-full'>
        <div>
          <h1 className='tracking-widest md:text-2xl'>SAY HELLO</h1>
          <a href="mailto:thevibecoder@gmail.com" className='pt-3 text-burnt-orange underline md:text-2xl animation duration-200 ease-in-out hover:text-text-gray'>thevibecoder@gmail.com</a>
        </div>

        <div className='pt-14 flex flex-col gap-6 text-burnt-orange'>
        <a href="/about" className='transition duration-200 ease-in-out w-[40%] hover:text-text-gray md:text-2xl'>About Me</a>
        <a href="/projects" className='transition duration-200 ease-in-out w-[40%] hover:text-text-gray md:text-2xl'>Projects</a>
        <a href="/" className='transition duration-200 ease-in-out w-[40%] hover:text-text-gray md:text-2xl'>Resume</a>
        </div>

        <div className='flex gap-5 pt-14'>
          <button className='border-2 border-burnt-orange text-burnt-orange rounded-3xl h-10 w-10 font-bold md:h-16 md:rounded-full md:w-16 md:text-2xl animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray'><a href='https://www.linkedin.com/in/david-irinyemi-395220162/' target='_blank' className='font-bold'>IN</a></button>
          <button className='border-2 border-burnt-orange text-burnt-orange  rounded-3xl h-10 w-10 font-bold md:h-16 md:rounded-full md:w-16 md:text-2xl animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray'><a href='https://github.com/vibe-coder' target='_blank' className='font-bold'>GT</a></button>
          <button className='border-2 border-burnt-orange text-burnt-orange  rounded-3xl h-10 w-10 font-bold md:h-16 md:rounded-full md:w-16 md:text-2xl animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray'><a href='https://twitter.com/vibe_coder' target='_blank' className='font-bold'>X</a></button>
        </div>

        <div className='pt-24 w-full mb-10'>
          <p className="md:text-2xl">© David Irinyemi 2023</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;