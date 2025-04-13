import './navbar.css';
import { useState } from 'react';
import abaLogo from "../images/abalogo-resized.png";
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
        document.getElementById("nav-toggle").classList.toggle('show-hide');
    }
    setMenuOpen(false);
}
    return(
        <div>
        <header>
            <Header />
        <section id="nav-mobile">
        <div id="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
            <nav className="nav-bar">
            <ul id="nav-toggle">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages/shop">Shop</Link></li>
                <li><Link to="/pages/collections">Collections</Link></li>
                <li><Link to="/pages/about">About</Link></li>
                <li><Link to="/pages/account">Account</Link></li>
                <li><Link to="/pages/cart">Cart</Link></li>
                <li><Link to="/pages/contact">Contact</Link></li>
            </ul>
        </nav>
    </section> 
    {/* regular nav */}
            <section className="navigation">
                <nav className="nav-bar" id="left-nav">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages/shop">Shop</Link></li>
                <li><Link to="/pages/collections">Collections</Link></li>
                <li><Link to="/pages/about">About</Link></li>
                </ul>
            </nav>
            <nav className="nav-bar" id="logo" >
                <a href="/">
                <img src={abaLogo} alt="aba logo resized"/>
            </a>
            </nav>
            
            <nav className="nav-bar" id="right-nav">
                <ul>
                <li><Link to="/pages/account">Account</Link></li>
                <li><Link to="/pages/cart">Cart</Link></li>
                <li><Link to="/pages/contact">Contact</Link></li>
                </ul>
            </nav>
        </section> 
        </header>
        <Outlet />
        </div>
    )
}

export default Navbar;