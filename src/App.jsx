import { BrowserRouter as Router,Routes,Route, HashRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './assets/Components/Navbar'

import Home from './assets/Pages/1.Home/Home'
import About from './assets/Pages/2.About/About'
import School from './assets/Pages/3.School/School'
import SocialMedia from './assets/Components/SocialMedia'
import Horarios from './assets/Pages/4.Horarios/Horarios'


function App() {
 

  return (
   <>
  
   <HashRouter>
       <Navbar></Navbar>
       <SocialMedia></SocialMedia>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/About" element= {<About/>}/>
       <Route path="/School" element= {<School/>}/>
       <Route path="/Horarios"  element={<Horarios/>}/>
      </Routes>
     </HashRouter>
   </>
  )
}

export default App
