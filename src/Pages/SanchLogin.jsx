import React from 'react'
import Button from '../Components/myButton';
import Text from '../Components/myText';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import '../Styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    const [sanchMail, setEmail] = useState('');
    const [sanchPassword, setPassword] = useState('');
    const navigate = useNavigate();
    const logSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/lb/sanch/login', {sanchMail,sanchPassword})
        .then(result => {
          console.log(result)
          if(result.data === "Success"){
            console.log("Ta amjilttai newterlee");
            navigate('/sanchBook')
          }
        })
        .catch(err => console.log(err))
    };
  return (
    
    <div className='Log'>
      <div className='Login'>
      <h4>Номын санч нэвтрэх</h4>
      <form onSubmit={logSubmit}>
      <div className="email">
        <FontAwesomeIcon icon={faAddressBook} />
        <Text placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="pass">
      <FontAwesomeIcon icon={faLock} />
        <Text placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="button">
        <Button title="Нэвтрэх"/>
        </div>
        </form>
        <div className="Role">
        <Button title="Хэрэглэгч" onClick={() => navigate('/')} />
        </div>
    </div>
    </div>
  )
}
export default Login