import './App.css'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import SimpleTransparentSection from './Components/SimpleTransparentSection/SimpleTransparentSection'
import StatsSection from './Components/StatsSection/StatsSection'

function App() {

  return (
    <>

      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <StatsSection></StatsSection>

        {/* Main Section */}

        <GetStarted></GetStarted>
        <SimpleTransparentSection></SimpleTransparentSection>
        <Footer></Footer>

      </div>


    </>
  )
}

export default App
