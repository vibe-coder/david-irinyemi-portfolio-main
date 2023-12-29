
const Section2 = () => {
  return(
    <section className="px-8 py-24">
      <div className="text-text-gray">
        <p className='font-sans font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dignissimos, ipsam iure velit exercitationem commodi quibusdam esse minus earum fuga soluta quia distinctio, error doloribus adipisci hic quaerat rem consectetur. <br/> <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aspernatur eveniet nemo, aperiam hic fuga quibusdam labore non exercitationem maiores et magni a quam placeat. Obcaecati fugit ipsam quo adipisci.</p>
        <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange mt-6 font-bold tracking-wider">CONTACT ME</button>
      </div>

      <div className="mt-14">
        <div className="bg-text-gray text-text-gray h-[26rem]">
          This is picture holder
        </div>

        <div className="flex mt-9 justify-between">
          <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange font-bold tracking-wider">ABOUT ME</button>
          <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange tracking-wider">PROJECTS</button>
          <button className="border-2 border-burnt-orange px-5 py-2 rounded-3xl text-burnt-orange tracking-wider">RESUME</button>
        </div>
      </div>
    </section>
  )
}

export default Section2;