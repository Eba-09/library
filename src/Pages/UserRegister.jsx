import React, { useState } from 'react';
import Button from '../Components/myButton';
import Text from '../Components/myText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "../Styles/Register.css";
import { useNavigate } from 'react-router-dom';
const UserRegister = () => {
  const [Fname, setFname] = useState(''); // initialize with an empty string
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [utas, setUtas] = useState('');
  const navigate = useNavigate();
  const UserSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/lb/user', {
        Fname,
        Lname,
        email,
        password,
        utas
      })
      .then(result =>{ 
        console.log(result)
        navigate('/');
      })
      .catch(err => console.log(err.response?.data || err.message));
    };
return (
    <div className='Reg'>
    <div className="Register">
        <h4>Хэрэглэгчийн Бүртгэлийн хуудас</h4>
    <form onSubmit={UserSubmit}>
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
            <Text placeholder="Phone" type="text" onChange={(e) => setUtas(e.target.value)} />
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
            <Button title="Бүртгүүлэх"/>
        </div>
        </form>
        <div className="Role">
        <Button title="Номын санч" onClick={() => navigate('/SanchRegister')} />
        </div>
    </div>
    </div>
);
};
export default UserRegister;
