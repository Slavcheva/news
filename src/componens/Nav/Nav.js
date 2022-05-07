import "./Nav.css"
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="site-nav">
            <div className="top-nav">
                <Link to="/" className="logo"><img src="/logo.png" alt="logo"/><h1>World News</h1></Link>
                <button className="menu-button">
                    <input type="checkbox" id="checkbox" className="checkbox visuallyHidden"/>
                    <label htmlFor="checkbox">
                        <div className="hamburger">
                            <span className="bar bar1"></span>
                            <span className="bar bar2"></span>
                            <span className="bar bar3"></span>
                            <span className="bar bar4"></span>
                        </div>
                    </label>

                </button>
            </div>

            <div className="nav-links">
            <ul>
                <NavLink to="/business" className="nav-link">Business</NavLink>
                <NavLink to="/science" className="nav-link">Science</NavLink>
                <NavLink to="/health" className="nav-link">Health</NavLink>
                <NavLink to="/sports" className="nav-link">Sport</NavLink>
            </ul>
            </div>
        </nav>

    )
}

export default Nav

