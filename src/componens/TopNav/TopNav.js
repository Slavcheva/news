import './TopNav.css'
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <div className='top-nav'>
            <Link to='#'><img src="/logo.png"/><h1>World News</h1></Link>
        </div>
    )
}

export default TopNav
