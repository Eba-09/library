import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Book.css';
import BookCategory from '../Components/bookCategory';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Components/userContext';
import Mybutton from '../Components/myButton';
const Homepage = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [uid, setUid] = useState(null);
  const userData = location.state.userdata;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/lb/user', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setUsers(response.data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (Array.isArray(users) && userData) {
      const user = users.find((item) => item.email === userData);
      if (user) {
        setUid(user._id);
      }
    }
  }, [users, userData]);

  const userContainer = () => {
    if (!Array.isArray(users)) {
      console.error("Users is not an array or is undefined");
      return null;
    }
    if (!userData) {
      console.error("No userdata found in location.state");
      return null;
    }
    const user = users.find((item) => item.email === userData);
    if (user) {
      return (
        <div className="user-Data" key={user._id}>
          <p><FontAwesomeIcon icon={faAddressBook} /> {user.Fname}</p>
          <p><FontAwesomeIcon icon={faAddressBook} /> {user.Lname}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <UserContext.Provider value={uid}>
      <div className="Book-cont">
        <div className="book-category">
          <BookCategory />
        </div>
        <div className="navhh">
        <Mybutton title="Log-out" onClick={() => navigate('/')}/>
        </div>
        <div className="user-face">
          {userContainer()}</div>
      </div>
    </UserContext.Provider>
  );
};
export default Homepage;
