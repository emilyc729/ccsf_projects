import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import applogo from './logo.png';

//inline style
/*
const divStyle = {
    fontSize: '2em'
}
*/

const Header = () => {
    return (
      /*  <div style={divStyle} className="Header">Header Component</div> */
      <div className="Header">
        <Link to="/">
          <img src={applogo} className="Header-logo" alt="logo for CNIT 133A application" />
        </Link>
      </div>
    );
}

export default Header;