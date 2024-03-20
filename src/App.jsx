import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/HighLights'
import Model from './components/Model'
import Features from './components/Features'
import HowItWorks from './components/HowltWorks'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>

    </>
  )
}

export default App
