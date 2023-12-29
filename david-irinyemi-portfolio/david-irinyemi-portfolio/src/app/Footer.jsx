import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({ 
  subsets: ['latin'],
  // display: 'swap'
})


const Footer = () => {
  return(
    <section className="px-8 pb-12 text-text-gray h-[80vh] flex items-end border-t-2 border-transparent">
      <div className='w-full'>
        <div>
          <h1 className='font tracking-widest fon'>SAY HELLO</h1>
          <p className='pt-3 text-burnt-orange'>thevibecoder@gmail.com</p>
        </div>

        <div className='pt-14 flex flex-col gap-6 text-burnt-orange'>
          <p>ABOUT ME</p>
          <p>PROJECTS</p>
          <p>RESUME</p>
        </div>

        <div className='flex gap-5 pt-14'>
          <button className='border-2 border-burnt-orange text-burnt-orange  rounded-3xl h-10 w-10 font-bold'><a href='https://www.linkedin.com/in/david-irinyemi-395220162/' target='_blank' className='font-bold'>IN</a></button>
          <button className='border-2 border-burnt-orange text-burnt-orange  rounded-3xl h-10 w-10 font-bold'><a href='https://github.com/vibe-coder' target='_blank' className='font-bold'>GT</a></button>
          <button className='border-2 border-burnt-orange text-burnt-orange  rounded-3xl h-10 w-10 font-bold'><a href='https://twitter.com/vibe_coder' target='_blank' className='font-bold'>X</a></button>
        </div>

        <div className='pt-24 w-full mb-10'>
          <p>© David Irinyemi 2023</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;