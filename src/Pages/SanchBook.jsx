import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Mybutton from '../Components/myButton'
import ConImage from '../images/Screenshot 2024-11-15 202906.png'
import MyButton from '../Components/myButton'
import '../Styles/Book.css'
const SanchBook = () => {
  const Navigate = useNavigate();
  return (
    <div className='Sanch-book'>
      <div>
      <h6>nominsanch</h6>
      </div>
      <div className='Navbars'>
        <div className='nav-container'>
        <Mybutton title="Ном бүртгэл" onClick={() => Navigate('/BookCreate')}/>
        <Mybutton title="Захиалгууд" onClick={() => Navigate('/sanchZahialga')}/>
        <Mybutton title="Log-out" onClick={() => Navigate('/')}/>
        </div>
    </div>
    <div className='con-flex'>
    <div>
    <h4>'LIBRARY STORE' номын дэлгүүрт тавтай морилно уу.</h4>
    <MyButton title="Get started"/>
    </div>
 <div className="con-img">
   <img src={ConImage} alt='My img'  height='400px'/>
 </div>
 </div>
    </div>
  )
}
export default SanchBook

