import React from 'react'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import { Project } from './Components/Project'
import Service from './Components/Service'
import SimpleSlider from './Components/SimpleSlider'
import Takeworld from './Components/Takeworld'

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
       <SimpleSlider/>
      {/* <Service/> */}
      {/* <Project/> */}
      {/* <Blog/> */}
      <Takeworld/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default page