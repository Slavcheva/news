import {Route, Routes} from "react-router-dom";

import "./App.css";
import Header from "./componens/Header/Header";
import Footer from "./componens/Footer/Footer";
import Main from "./componens/Main/Main";
import Aside from "./componens/Aside/Aside"

function App() {
    return (
        <div className="site">
            <Header/>
            <Main/>
            <Aside/>
            <Footer/>
        </div>
    );
}

export default App;
