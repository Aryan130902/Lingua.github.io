import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Input from './Input';
import Body from './Body';
import Testimonial from './Testimonial';
import Section1 from './Section1';
import Accordian from './Accordian';
const Main = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Section1/>
    <Body/>
    <Testimonial/>
    <Accordian/>
    <Input/>
    <Footer/>
    </div>
  )
}

export default Main