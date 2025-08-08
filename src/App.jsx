import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'></Title>
        <Programs></Programs>
        <About></About>
        <Title subTitle='Gallery' title='Campus Photos'></Title>
        <Campus></Campus>

      </div>
    </div>
  )
}

export default App
