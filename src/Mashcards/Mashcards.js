import React from 'react'
import './Mashcards.css'
import Yellow from '../../src/components/assests/Mask group.png'
import Red from "../../src/components/assests/Group 6.png"
import Green from '../../src/components/assests/Group 4.png'
function Mashcards() {
  return (
    <div className='cardss'>
        <div className='green'>  <img src = {Green} alt='#'/> </div>     
        <div className='yellow'>  <img src = {Yellow} alt='#'/> </div>     
        <div className='red'> <img src= {Red} alt='#'/> </div>



    </div>

  )
}

export default Mashcards