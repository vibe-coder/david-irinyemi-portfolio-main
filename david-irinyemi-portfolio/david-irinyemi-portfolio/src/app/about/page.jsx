import "./Styles/About.scss"



const About = () => {
  return(
    <section className="">
      <div id='wrapper'>
        <div id='scroll'>
          <div id='to-left' className="mt-[-30px]  md:mt-[-30px]">
            <h1 className="text-[14rem] text-text-gray font-extrabold uppercase md:text-[20rem] lg:text-[14rem]"> ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME - ABOUT ME</h1>
          </div>
        </div>
      </div>

      <div className="text-burnt-orange px-8 font-sans font-normal text-center flex justify-center">
        <p className="md:w-[85%] lg:w-[60%] md:text-2xl lg:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. nulla fugiat laudantium, illo repudiandae quidem doloremque dolore blanditiis?</p>
      </div>

      <div id='scroll-down-div' className='font px-8 flex flex-col justify-between items-center mt-10 lg:mt-52'>
        <div className='h-10 w-10 border border-burnt-orange rounded-3xl mt-2 flex justify-center items-start overflow-hidden'>
          <p id='arrow' className='text-3xl text-burnt-orange'>&#8675;</p>
        </div>
      </div>


      <div className="px-8 pt-10 md:pt-24 md:px-16 lg:px-80">
        <table className="text-text-gray font-sans font-bold border w-full md:text-xl">
          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange">Name</td>
            <td className="border p-3">David Irinyemi</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange ">Position</td>
            <td className="border p-3">Frontend Developer, Graphic Designer</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange ">Github</td>
            <td className="border p-3 underline"><a href="https://github.com/vibe-coder" target="_blank">Vibe Coder</a></td>
          </tr>

          {/* <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange ">Phone No:</td>
            <td className="border p-3">+234 901 241 6616</td>
          </tr> */}

          <tr>
            <td className="border border-text-gray pl-3 font-bold text-burnt-orange ">Mail</td>
            <td className="border p-3 underline"><a href="mailto:thevibecoder@gmail.com" target="_black">thevibecoder@gmail.com</a></td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange ">LinkedIn</td>
            <td className="border p-3 underline"><a href="https://www.linkedin.com/in/david-irinyemi-395220162/" target="_blank">David Irinyemi</a></td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange ">Twitter</td>
            <td className="border p-3 underline"><a href="https://www.linkedin.com/in/david-irinyemi-395220162/" target="_blank">David Irinyemi</a></td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange ">Years of Experience</td>
            <td className="border p-3">Frontend Development (1 year building projects) | Graphic Design (6+ years)</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange ">Skills</td>
            <td className="border p-3">HTML / CSS</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">JavaScript</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">ReactJS</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">Tailwind CSS</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">Git</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">REST API</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">Figma</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">Illustrator</td>
          </tr>

          <tr>
            <td className="border border-text-gray p-3 font-bold text-burnt-orange "></td>
            <td className="border p-3">Photoshop</td>
          </tr>
        </table>
      </div>
    </section>
  )
}


export default About;