import React from 'react'
import {Close , Menu} from '@mui/icons-material';
import "./navbar.scss";



export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
        <div className="wrapper">
            <div className="left">
                <a href="#home" className='logo'>
                    WEB STUDIO
                </a>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    {menuOpen ? <Close className='icon' /> : <Menu className='icon'/>}
                </div>
            </div>
        </div>
      
    </div>
  )
}
