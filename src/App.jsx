import './App.css'
import GetStarted from './Components/GetStarted/GetStarted'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
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

      </div>


    </>
  )
}

export default App
