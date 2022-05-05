import "./Header.css"
import Nav from "../Nav/Nav";
import TopNav from "../TopNav/TopNav";

const Header = () => {
    return (
        <header className="site-header">
            <TopNav/>
            <Nav/>
        </header>
    )
}

export default Header
