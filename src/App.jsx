import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Service from './components/service/service'
import Portfolio from './components/portfolio/portfolio'
import Testemonial from './components/testemonial/testemonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testemonial />
        <Contact />
        <Footer />
    </>
  )
}

export default App