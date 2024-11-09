import React, { Component } from 'react';

import {Nav,Navbar,NavDropdown} from 'react-bootstrap';




class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
  
    render() {
        return (
            <div >
        <header  className='sticky'>
        <nav className="navbar navbar-expand-md navbar-dark bg-white">
        <div className="topLeft">
         <i className='topIcon fa-brands fa-facebook-square' ></i>
         <i className='topIcon fa-brands fa-instagram-square'></i>
         <i className='topIcon fa-brands fa-twitter-square' ></i>
         </div>
         <div className="topCenter">
            <ul className='topList'>
            <li className='topListItem' href='http://localhost:3000/contact'> HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'> <a href='http://localhost:3000/contact'>CONTACT</a></li>
            <li className='topListItem' ><a href='http://localhost:3000/login' onClick={()=>localStorage.removeItem("token")}>SIGN OUT</a></li>
            </ul>
        </div>
            <div className="topRight">
          <a href='http://localhost:3000/login'><span className='topSearch fa-solid fa-user'></span></a>
          
          <i className='topSearch fa-solid fa-magnifying-glass'class="lnr lnr-magnifier" id="search"></i>
          <input class="form-control" id="searchInput" type="search" placeholder="Search"></input>
        
      
       
         </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
