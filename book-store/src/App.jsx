import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Header } from './Components/Header1'
import { Header2 } from './Components/Header2'
import { Footer } from './Components/Footer'
import { Features } from './Components/Features'
import { ConsistantUI } from './Components/ConsistantUI'
import { Tool } from './Components/Tool'
import { Facilities } from './Components/Facility'
import { Templates } from './Components/Templete'
import { CodeDesign } from './Components/CodeDesign'


function App() {

  return (
    <div>
      <Navbar/>
     <Header/>
     <Header2/>
     <Features/>
     <ConsistantUI />
     <CodeDesign/>
     <Tool/>
     <Facilities/>
     <Templates/>
     
     <Footer/>
    </div>
  )
}

export default App
