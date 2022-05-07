import "./Nav.css"
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="site-nav">
            <Link to="/"><img src="/logo.png" alt="logo"/><h1>World News</h1></Link>
            <ul>
                <NavLink to="/business" className="nav-link">Business</NavLink>
                <NavLink to="/science" className="nav-link">Science</NavLink>
                <NavLink to="/technology" className="nav-link">Technology</NavLink>
                <NavLink to="/entertainment" className="nav-link">Entertainment</NavLink>
                <NavLink to="/health" className="nav-link">Health</NavLink>
                <NavLink to="/sport" className="nav-link">Sport</NavLink>
            </ul>
        </nav>
    )
}

export default Nav
