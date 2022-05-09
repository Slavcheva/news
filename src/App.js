import React from "react";
import {Route, Routes} from "react-router-dom";

import "./App.css";
import Header from "./componens/Header/Header";
import Footer from "./componens/Footer/Footer";
import Home from "./componens/Home/Home";
import Science from "./componens/category-views/Science";
import Business from "./componens/category-views/Business";
import Health from "./componens/category-views/Health";
import Sports from "./componens/category-views/Sports";


function App() {
    return (
        <div className="site">
            <Header/>
            <main className="site-main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/business" element={<Business/>}/>
                    <Route path="/health" element={<Health/>}/>
                    <Route path="/sports" element={<Sports/>}/>
                    <Route path="/science" element={<Science/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
