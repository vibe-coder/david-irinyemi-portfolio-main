import './Styles/Section1.scss'


const Section1 = () => {
  return(
    <section className="pt-5 h-screen">
      <div id='wrapper' className='h-full'>
        <div id='scroll' className="overflow-scroll">
          <div id='to-left' className="mt-[-30px] h-[14rem]">
            <h1 className="text-[14rem]  text-text-gray font-extrabold m-0">Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer</h1>
          </div>

          <div id='to-right' className=''>
            <h1 className="text-[14rem] m-0 text-text-gray font-extrabold">Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer Frontend Developer</h1>
          </div>
        </div>

        <div className='font px-8 flex justify-between items-center'>
          <p className='text-text-gray'>David Irinyemi</p>
          <p className='text-4xl rotate-90 text-text-gray'>&#10139;</p>
        </div>
      </div>
    </section>
  )
}


export default Section1;