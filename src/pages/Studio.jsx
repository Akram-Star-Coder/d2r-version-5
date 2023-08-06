import React from 'react'
import './index.css';
import Navbar from '../components/Navbar';
import ContainerStudio from '../components/ContainerStudio';
import Footer from '../components/Container11'

const Studio = () => {
  return (
    <div className='Studio'>
      <Navbar />
      <ContainerStudio />
      <Footer/>
    </div>
  )
}

export default Studio