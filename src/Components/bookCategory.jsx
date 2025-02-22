import React, { useState, useEffect, useContext } from 'react';
import '../Styles/Book.css';
import MyButton from './myButton';
import axios from 'axios';
import { UserContext } from './userContext'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
const BookCategory = () => {
  const [categoryData, setCategoryData] = useState([]); 
  const [books, setBooks] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [nomCode, setnomCode] = useState('');
  const [userCode, setuserCode] = useState('');
  const [tuluw, settuluw] = useState('');
  const [userZahialga ,setUserZahialga] = useState([]);
  const userId = useContext(UserContext);
  useEffect(() => {
    axios.get('http://localhost:8000/api/lb/category', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setCategoryData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/lb/zahialga/user`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setUserZahialga(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 
  //userzahialguud 
  const zahialguud = () => {
    if (userZahialga.length > 0) {
      return (
        <>
          {userZahialga.map((item) => {
            if (item.userCode === userId) {
              return (
                <div key={item._id}>
                  <p>{item.zahialgaDate}</p>
                </div>
              );
            }
            return null;
          })}
        </>
      );
    } else {
      return <p>No orders found</p>;
    }
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
          <FirstPageIcon />
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          <LastPageIcon />
        </IconButton>
      </Box>
    );
  }
  function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }
  const zahialgas = () => {
    if (userZahialga.length > 0) {
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="user orders table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Номын нэр</StyledTableCell>
                <StyledTableCell>Үнийн дүн</StyledTableCell>
                <StyledTableCell align="left">Захиалсан огноо</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userZahialga.map((item) => {
                if (item.userCode === userId) {
                  return (
                    <StyledTableRow key={item._id}>
                      <StyledTableCell>
                      {item.nomCode.name}  
                      </StyledTableCell>
                      <StyledTableCell>
                      {item.nomCode.price}  
                      </StyledTableCell>
                      <StyledTableCell align="left">
                      {formatDateTime(item.zahialgaDate)}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                }
                return null;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      );
    } else {
      return <p>No orders found</p>;
    }
  };
  
  // Категори дээр дарахад тухайн категорт хамаарах номнуудыг авах
  const handleCategoryClick = (categoryid, categoryName) => {
    setSelectedCategory(categoryName);
    axios.get(`http://localhost:8000/api/lb/category/book/${categoryid}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setBooks(response.data.data); 
        console.log(response.data.data)
        console.log(categoryid);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const zahialga = (nom) =>{
    setnomCode(nom)
    setuserCode(userId)
    settuluw("1")
    axios.post('http://localhost:8000/api/lb/zahialga', {
      nomCode,userCode,tuluw
    })
            .then((result) => {
                console.log("Response:", result.data);
            })
            .catch((err) => {
                console.error("Error:", err.message); 
            });
  }
  console.log(userCode);
  // Категорийн жагсаалт
  const renderCategories = () => {
    return categoryData.length > 0 ? (
      categoryData.map((item) => (
        <div className="datas" key={item._id}>
          <MyButton
            title={item.name}
            onClick={() => handleCategoryClick(item._id, item.name)}
          />
        </div>
      ))
    ) : (
      <p>Категори байхгүй байна.</p>
    );
  };
  // Номнуудын жагсаалт
  const renderBooks = () => {
    return books.length > 0 ? (
      books.map((book, index) => (
        <div className="book-item" key={book._id || index}>
          <p>Номын нэр: {book.name}</p>
          <p>Үнэлгээ: {book.rating}</p>
          <p>Зохиолч: {book.authorId.aFname}</p>
          <p>Үнэ: {book.price}</p>
          <img src={book.photo} height='130px' width='180px'/>
          <MyButton title="Захиалах" onClick={() => zahialga(book._id)}/>
        </div>
      ))
    ) : (
      <p>Ном олдсонгүй.</p>
    );
  };

  return (
    <div className="book-cat" >
      <div className="category">{renderCategories()}</div>
      {selectedCategory && (
        <div className="selected-category">
          <h3>{selectedCategory} - Номууд {books.length}</h3>
          <div className="books">{renderBooks()}</div>
        </div>
      )}
      <div className="zahialga">
        {zahialgas()}
      </div>
    </div>
  );
};
export default BookCategory;
