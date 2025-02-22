import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import Button from './myButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook } from '@fortawesome/free-solid-svg-icons'
import Text from './myText.jsx'
import Mybutton from './myButton.jsx';
import { useNavigate } from 'react-router-dom'
import '../Styles/Book.css'
const bookCreate = () => {
    const [name, setname] = useState('');
    const [photo, setphoto] = useState('');
    const [authorId, setauthorid] = useState('');
    const [isbn, setisbn] = useState('');
    const [rating, setrating] = useState('');
    const [price, setprice] = useState('');
    const [hel, sethel] = useState('');
    const [hewlesenOgnoo, sethewOgnoo] = useState('');
    const [too, settoo] = useState('');
    const [huudas, sethuudas] = useState('');
    const [available, setavailable] = useState('');
    const [categoryId, setcategoryId] = useState('');
    const [bairshil, setbairshil] = useState('');
    const [createUser, setcreateUser] = useState('');
    const [authors, setauthors] = useState('');
    const [categorud, setcategorud] = useState('');
    const Navigate = useNavigate();
    useEffect(() =>{
        axios.get('http://localhost:8000/api/lb/author', {
            headers: {
                    'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                setauthors(response.data.data);
                    })
                .catch((error) => {
                    console.log(error);
                });
    },[]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/lb/category', {
            headers: {
                    'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                setcategorud(response.data.data);
                console.log(response.data.data)
                    })
                .catch((error) => {
                    console.log(error);
                });
    },[]);
    const SanchSubmit = (e) => {
        e.preventDefault();
    
        // Constructing the payload for better readability and debugging
        const payload = {
            name,
            photo,
            authorId,
            isbn,
            rating,
            price,
            hel,
            hewlesenOgnoo,
            too,
            huudas,
            available,
            bairshil,
            categoryId,
            createUser
        };
    
        // Logging the payload to check the data being sent
        console.log("Submitting Data:", payload);
        // Axios POST request
        axios.post('http://localhost:8000/api/lb/book', payload)
            .then((result) => {
                console.log("Response:", result.data); // Log only the data from the response
            })
            .catch((err) => {
                console.error("Error:", err.message); // Use console.error for errors
            });
    };
    const autid = (cid) =>{
        console.log(cid)
        setauthorid(cid)
    }
    const catid = (tid)=>{
        console.log(tid)
        setcategoryId(tid)
    }
    const authorud = () =>{
        return authors.length > 0 ? (
            authors.map((item, index) => (
            <div key={item.id || index}>
                <>
                <p className='catud' onClick={() => autid(item._id)}>{item.aFname}</p>
                </>
            </div>
            ))
        ) : (
            <p>Zohiolc байхгүй байна.</p>
        );
    }
    const categories = () =>{
        return categorud.length > 0 ? (
            categorud.map((item, index) => (
            <div key={item.id || index}>
                <>
                <p className='catud' onClick={() => catid(item._id)}>{item.name}</p>
                </>
            </div>
            ))
        ) : (
            <p>Категори байхгүй байна.</p>
        );
    }
        return (
        <div className='nom-burtgel'>
            <div className='Navbars'>
        <div className='nav-container'>
        <Mybutton className="backbtn" title="Ном бүртгэл" onClick={() => Navigate('/BookCreate')}/>
        <Mybutton title="Захиалгууд" onClick={() => Navigate('/sanchZahialga')}/>
        <Mybutton title="Log-out" onClick={() => Navigate('/')}/>
        </div>
    </div>
        <div className="burtgel-cont">
            <form onSubmit={SanchSubmit}>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын нэр оруулна уу." type="text" onChange={(e) => setname(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Зураг оруулна уу." type="text" onChange={(e) => setphoto(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын rating оруулна уу." type="text" onChange={(e) => setrating(e.target.value)} />
            </div>
            <div className="cat-list">
                <p>Зохиолчид:</p>{authorud()}
            </div>
            <div className="cat-list">
                <p>Номын категориуд:</p>{categories()}
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын ISBN оруулна уу." type="text" onChange={(e) => setisbn(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын үнийг оруулна уу." type="text" onChange={(e) => setprice(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын хэлийг оруулна уу." type="text" onChange={(e) => sethel(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын огноог оруулна уу." type="date" onChange={(e) => sethewOgnoo(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын тоог оруулна уу." type="text" onChange={(e) => settoo(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын хуудсыг оруулна уу." type="text" onChange={(e) => sethuudas(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын available оруулна уу." type="text" onChange={(e) => setavailable(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Номын байршлыг оруулна уу." type="text" onChange={(e) => setbairshil(e.target.value)} />
            </div>
            <div className="book-input">
                <FontAwesomeIcon icon={faBook} />
                <Text placeholder="Үүсгэсэн номын санч нэрээ уу." type="text" onChange={(e) => setcreateUser(e.target.value)} />
            </div>
            <div className="button">
                <Button title="Үүсгэх" />
            </div>
            </form>
        </div>
        </div>
        );
    };
export default bookCreate