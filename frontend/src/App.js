import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect } from 'react';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Signup from './component/Signup';
import Home from './component/Home';
import Login from './component/Login';
import history from './history/history';
import { useNavigate } from 'react-router-dom';
import FindBlood from './component/findBlood';


function App (){

  

  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const userNme = localStorage.getItem('userName');
  const logoutHandeler = () =>{
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    navigate('/');

  }
  useEffect(()=>{
    
  },)
  return (
    
    <React.Fragment>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#" style = {{color:"red"}}>Imp Life</a>
      {userId ? <div className='navbars'>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to='/'><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
      </li>
      <li class="nav-item">
        <Link to='/findblood'><a className="nav-link">Find Blood</a></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" >Blood Details</a>
      </li>
      <li className="nav-item">
      <button className=" btn"><b>Hi!{userNme}</b></button>
      </li>
      <li className="nav-item">
      <a className="nav-link" onClick={logoutHandeler}><i className="fa fa-sign-out"></i>Logout</a>
      </li>
    </ul> 
  </div>
  </div>:
    <li>
    <Link to='/login'><button className=" btn"><b>LOGIN</b></button></Link>
      </li>}
</nav>
    
       
      <Routes>
      
      <Route path="/signup" element={<Signup nav={navigate}></Signup>} />
      <Route path="/login" element={<Login nav={navigate}></Login>} />
      <Route path="/findblood" element={<FindBlood nav={navigate}></FindBlood>} />
      <Route path="/" exact element={<Home></Home>}></Route>
      </Routes>
      

     

     <footer className='text-center'>
       <h3>@implife</h3>
     </footer>
    </div>
    </React.Fragment>

  );
}

export default App;
