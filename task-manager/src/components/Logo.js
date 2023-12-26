import React from 'react';
import appLogo from '../images/app-logo.png';
import '../App.css'

const Logo = ()=>{
    return (
        <div className='logo-container'>
        <img
          src={appLogo}
          className='app-logo'
        />
      </div>
    );
};
    
export default Logo;