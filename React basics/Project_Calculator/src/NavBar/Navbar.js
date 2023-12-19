import React from 'react'
import './Navbar.css';
import Logo from '../Assets/logo.png'
import LinkedIn from '../Assets/LinkedIn.png';
function Navbar() {
  return (
    <div className="main_menu">
        <div><img src={Logo} alt="Logo" className='Logo' /></div>
        <div className='Calci'>CALCI</div>
        <div className='Krishna'>Made by Krishna</div>
        <div className='LinkedIn'><a href="https://www.linkedin.com/in/krishna-p-g-8a4402247/"><img src={LinkedIn} alt="LinkedIn" /></a></div>
        <div className='Keyboard'>Keyboard-Friendly Calculator</div>
    </div>
  )
}

export default Navbar;