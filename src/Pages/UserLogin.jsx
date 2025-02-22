import React from 'react'
import Button from '../Components/myButton';
import Text from '../Components/myText';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios';
import '../Styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons'
const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userdata, setuserdata] = useState('');
    const navigate = useNavigate();
    const logSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/lb/user/login', {email,password})
        .then(result => {
          console.log(result)
          if(result.data === "Success"){
            console.log("Ta amjilttai newterlee");
            setuserdata(email)
            navigate('/Book', {state: {userdata : email}})
          }
        })
        .catch(err => console.log(err))
    };
  return (
    <div className='Log'>
      <div className='Login'>
      <h4>Хэрэглэгч нэвтрэх</h4>
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
        <Button title="Номын санч" onClick={() => navigate('/SanchLogin')} />
        </div>
    </div>
    </div>
  )
}

export default UserLogin