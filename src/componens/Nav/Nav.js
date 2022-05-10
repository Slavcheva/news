import React, {useState} from "react"
import {Link, NavLink} from "react-router-dom";
import "./Nav.css";

import {MdClose} from "react-icons/md"
import {FiMenu} from "react-icons/fi"


const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <nav className="site-nav">
            <Link to="/" className="logo"><img src="/logo.png" alt="logo"/><h1>World News</h1></Link>
            <div className="site-menu">
                <button onClick={handleToggle} className="button">
                    {navbarOpen ? (
                        <MdClose className="menu-button"/>
                    ) : (
                        <FiMenu className="menu-button"/>
                    )}
                </button>
                <ul className={`menu-nav ${navbarOpen ? "show-menu" : ""}`}>
                    <NavLink to="/business" className="menu-link" onClick={() => closeMenu()}
                             exact>Business</NavLink>
                    <NavLink to="/science" className="menu-link" onClick={() => closeMenu()}
                             exact>Science</NavLink>
                    <NavLink to="/health" className="menu-link" onClick={() => closeMenu()}
                             exact>Health</NavLink>
                    <NavLink to="/sports" className="menu-link" onClick={() => closeMenu()}
                             exact>Sport</NavLink>
                </ul>
            </div>

        </nav>

    )
}

export default Nav

