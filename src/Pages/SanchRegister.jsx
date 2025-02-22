import React, { useState } from 'react';
import Button from '../Components/myButton';
import Text from '../Components/myText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "../Styles/Register.css";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [sanchFN, setFname] = useState(''); // initialize with an empty string
  const [sanchLN, setLname] = useState('');
  const [sanchMail, setEmail] = useState('');
  const [sanchPassword, setPassword] = useState('');
  const [sanchUtas, setsanchUtas] = useState('');
  const navigate = useNavigate();
  const SanchSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/lb/sanch', {
        sanchFN,
        sanchLN,
        sanchUtas,
        sanchMail,
        sanchPassword
      })
      .then(result =>{ 
        console.log(result)
        navigate('/SanchLogin');
      })
      .catch(err => console.log(err.response?.data || err.message));
  };
  return (
    <div className='Reg'>
    <div className="Register">
      <h4>Номын санчийн Бүртгэлийн хуудас</h4>
      <form onSubmit={SanchSubmit}>
        <div className="email">
          <FontAwesomeIcon icon={faAddressBook} />
          <Text placeholder="First name" type="text" onChange={(e) => setFname(e.target.value)} />
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faAddressBook} />
          <Text placeholder="Last name" type="text" onChange={(e) => setLname(e.target.value)} />
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faAddressBook} />
          <Text placeholder="Phone" type="text" onChange={(e) => setsanchUtas(e.target.value)} />
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faAddressBook} />
          <Text placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="pass">
          <FontAwesomeIcon icon={faLock} />
          <Text placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="button">
          <Button title="Бүртгүүлэх" />
        </div>
        </form>
        <div className="Role">
        <Button title="Хэрэглэгч" onClick={() => navigate('/UserRegister')} />
        </div>
      
    </div>
    </div>
  );
};
export default Register;
