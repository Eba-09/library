import React from 'react'
import Mybutton from '../Components/myButton'
import { useNavigate } from 'react-router-dom'
import Logo from '../images/Screenshot 2024-11-15 202906.png'

import '../Styles/Register.css'
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='Navbars'>
      <div className='logo'>
      <img src={Logo} alt="My Logo" height="40px" width='100px'/>
      </div>
        <div className='nav-con'>
        <Mybutton title="About" onClick={() => navigate('/About')}/>
        <Mybutton title="Login" onClick={() => navigate('/')}/>
        
        </div>
        <div className="nav-left">
        <Mybutton title="Register" onClick={() => navigate('/UserRegister')}/>
        </div>
    </div>
  )
}
export default Sidebar