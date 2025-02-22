import React from 'react'
import '../Styles/Register.css'
import ConImage from '../images/girl-5757532_640.jpg'
import MyButton from '../Components/myButton'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate();
  return (
    <div className='ABout'>
    <div className='con-flex'>
    <div>
    <h4>'LIBRARY STORE' номын дэлгүүрт тавтай морилно уу.</h4>
    <MyButton title="Get started" onClick={() => navigate('/')}/>
    </div>
 <div className="con-img">
   <img src={ConImage} alt='My img'  height='400px'/>
 </div>
 </div>
 </div>
  )
}
export default About