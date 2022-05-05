import {Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./componens/Header/Header";
import Footer from "./componens/Footer/Footer";
import Main from "./componens/Main/Main";
import Aside from './componens/Aside/Aside'

function App() {
    return (
        <div className="container">
            <Header/>
            <Main/>
            <Aside/>
            {/*<div>*/}
            {/*    <Routes>*/}
            {/*        /!*<Route path="/" element={<NewsBoard/>}*!/*/}
            {/*        /!*<Route path="/" element={<NewsBoard/>}*!/*/}
            {/*    </Routes>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    );
}

export default App;
