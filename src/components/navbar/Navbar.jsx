import React from 'react'
import Searchbar from '../searchbar/Searchbar';
import Logo from '../logo/Logo';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
        <Logo />
        <Searchbar />
    </header>
  )
}
