import './App.css'
import Navbar from './assets/Components/Navbar'
import Hero from './assets/Components/Hero'
import Technology from './assets/Components/Technology'
import Projects from './assets/Components/Projects'
import Experience from './assets/Components/Experience'
import Contact from './assets/Components/Contact'



function App() {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      <div className='fixed inset-0 z-10'>
        <div className="absolute inset-0 -z-10 h-full overflow-y-auto overflow-x-hidden w-full items-center p-3 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <div className='container mx-auto px-2'>
            <Navbar />
            <Hero/>
            <Technology/>
            <Projects/>
            <Experience/>
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
