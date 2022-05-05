import './Nav.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="site-nav">
           <ul>
               <NavLink to="/" className="nav-link">General</NavLink>
               <NavLink to="/" className="nav-link">Business</NavLink>
               <NavLink to="/" className="nav-link">Entertainment</NavLink>
               <NavLink to="/" className="nav-link">Health</NavLink>
               <NavLink to="/" className="nav-link">Sport</NavLink>
               <NavLink to="/" className="nav-link">Science</NavLink>
               <NavLink to="/" className="nav-link">Technology</NavLink>
           </ul>
        </nav>
    )
}

export default Nav
