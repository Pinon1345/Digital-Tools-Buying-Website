
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import SimpleTransparentSection from './Components/SimpleTransparentSection/SimpleTransparentSection'
import StatsSection from './Components/StatsSection/StatsSection'
import Tools from './Components/Tools/Tools'


const getTools = async () => {
  const response = await fetch("/tools.json")
  return response.json();

}

const toolPromise = getTools()

function App() {

  const [activeTab, setActiveTab] = useState("Product");
  console.log(activeTab);

  const [carts, setCarts] = useState([]);
  console.log(carts);


  return (
    <>

      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <StatsSection></StatsSection>

        {/* Main Section */}


        <div className="mb-4 mt-2">

          <div className="flex justify-center">
            <div className="flex gap-2 bg-white/30 backdrop-blur-md p-2 rounded-full shadow-lg">

              {/* name of each tab group should be unique */}

              <div className="tabs tabs-box rounded-full font-bold">
                <input type="radio" name="my_tabs_1" className="tab rounded-2xl w-40" aria-label="Products" defaultChecked
                  onClick={() => setActiveTab("Product")}
                />

                <input type="radio" name="my_tabs_1" className="tab rounded-2xl w-40" aria-label={`Cart (${carts.length})`}
                  onClick={() => setActiveTab("Cart")}
                />
              </div>

            </div>
          </div>

        </div>


        {activeTab === "Product" && <Tools toolPromise={toolPromise} carts={carts} setCarts={setCarts}></Tools>}

        {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}


        <GetStarted></GetStarted>
        <SimpleTransparentSection></SimpleTransparentSection>
        <Footer></Footer>

      </div>


    </>
  )
}

export default App
