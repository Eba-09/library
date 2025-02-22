import React from 'react';
import './App.css';
import SanchLogin from './Pages/SanchLogin';
import SanchRegister from './Pages/SanchRegister';
import SanchBook from './Pages/SanchBook'
import UserLogin from './Pages/UserLogin';
import UserRegister from './Pages/UserRegister';
import Book from './Pages/UserBook';
import Sidebar from './Pages/Sidebar';
import About from './Pages/About';
import BookCreate from './Components/bookCreate'
import SanchZahialga from './Components/sanchZahialga'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return(
    <div className='Body'>  
    <BrowserRouter>
    <div className='Navbar'>
        <Sidebar />
        </div>
        <Routes>
          <Route path="/SanchLogin" element={<SanchLogin />} />
          <Route path="/SanchRegister" element={<SanchRegister />} />
          <Route path="/" element={<UserLogin/>} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/sanchBook" element={<SanchBook />} />
          <Route path="/About" element={<About />} />
          <Route path="/sanchZahialga" element={<SanchZahialga />} />
          <Route path="/BookCreate" element={<BookCreate />} />
        </Routes>
    </BrowserRouter>
     <div className="Container">
      <h6>Homepage</h6>
 </div>
 </div>
  )
}
export default App;
