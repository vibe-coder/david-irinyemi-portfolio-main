import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({ 
  subsets: ['latin'],
  // display: 'swap'
})


const Footer = () => {
  return(
    <section className="px-8 pb-12 text-text-gray h-[70vh] flex items-end border-t-2 border-text-gray">
      <div className='w-full'>
        <div>
          <h1 className='font tracking-widest'>SAY HELLO</h1>
          <p className='pt-3'>thevibecoder@gmail.com</p>
        </div>

        <div className='pt-14 flex flex-col gap-6'>
          <p>ABOUT ME</p>
          <p>PROJECTS</p>
          <p>RESUME</p>
        </div>

        <div className='flex gap-5 pt-14'>
          <button className='border-2 border-text-gray rounded-3xl h-10 w-10 font-bold'>IN</button>
          <button className='border-2 border-text-gray rounded-3xl h-10 w-10 font-bold'>GT</button>
          <button className='border-2 border-text-gray rounded-3xl h-10 w-10 font-bold'>X</button>
        </div>

        <div className='pt-24 w-full'>
          <p>@ David Irinyemi 2023</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;