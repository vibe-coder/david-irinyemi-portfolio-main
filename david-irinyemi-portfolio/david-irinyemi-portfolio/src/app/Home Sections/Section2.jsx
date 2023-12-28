import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({ 
  subsets: ['latin'],
  // display: 'swap'
})



const Section2 = () => {
  return(
    <section className="px-8 py-24">
      <div className="text-text-gray">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dignissimos, ipsam iure velit exercitationem commodi quibusdam esse minus earum fuga soluta quia distinctio, error doloribus adipisci hic quaerat rem consectetur. <br/> <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aspernatur eveniet nemo, aperiam hic fuga quibusdam labore non exercitationem maiores et magni a quam placeat. Obcaecati fugit ipsam quo adipisci.</p>
        <button className="border-2 border-text-gray px-5 py-2 rounded-3xl text-text-gray mt-6 font-bold">CONTACT ME</button>
      </div>

      <div className="mt-10">
        <div className="bg-text-gray text-text-gray h-[26rem]">
          This is picture holder
        </div>

        <div className="flex mt-9 justify-between">
          <button className="border-2 border-text-gray px-4 py-2 rounded-3xl text-text-gray text-sm font-bold">ABOUT ME</button>
          <button className="border-2 border-text-gray px-4 py-2 rounded-3xl text-text-gray">PROJECTS</button>
          <button className="border-2 border-text-gray px-4 py-2 rounded-3xl text-text-gray">RESUME</button>
        </div>
      </div>
    </section>
  )
}

export default Section2;