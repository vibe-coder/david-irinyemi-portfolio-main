
const Section2 = () => {
  return(
    <section className="px-8 py-24 md:px-16 md:flex md:flex-col lg:flex-row lg:px-24 lg:justify-between lg:h-screen">
      <div className="text-text-gray md:w-[100%] lg:w-[50%]">
        <p className='font-sans font-normal md:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dignissimos, ipsam iure velit exercitationem commodi quibusdam esse minus earum fuga soluta quia distinctio, error doloribus adipisci hic quaerat rem consectetur. <br/> <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aspernatur eveniet nemo, aperiam hic fuga quibusdam labore non exercitationem maiores et magni a quam placeat. Obcaecati fugit ipsam quo adipisci.</p>
        <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange mt-6 font-bold animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray tracking-wider md:text-2xl md:rounded-[40px] md:mt-12 md:px-9 md:py-4">CONTACT ME</button>
      </div>

      <div className="mt-14 md:flex md:flex-col md:items-center md:mt-20 lg:mt-0">
        <div className="bg-text-gray text-text-gray h-[26rem] md:h-[30rem] lg:h-[40rem] md:w-[60%] lg:w-full">
          This is picture holder
        </div>

        <div className="flex mt-9 justify-between md:w-[100%] md:justify-center md:gap-11">
          <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange mt-6 font-bold animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray tracking-wider md:text-2xl md:rounded-[40px] md:px-9 md:py-4">ABOUT ME</button>
          <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange mt-6 font-bold animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray tracking-wider md:text-2xl md:rounded-[40px] md:px-9 md:py-4">PROJECTS</button>
          <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange mt-6 font-bold animation duration-200 ease-in-out hover:text-text-gray hover:border-text-gray tracking-wider md:text-2xl md:rounded-[40px] md:px-9 md:py-4">RESUME</button>
        </div>
      </div>
    </section>
  )
}

export default Section2;