import Image from 'next/image'
import HomeContainer from './HomeContainer'
import NavBar from './Navbar'

export default function Home() {
  return (
    <section className='bg-gray overflow-x-hidden h-screen'>
      <NavBar/>
      <HomeContainer/>
    </section>
  )
}
