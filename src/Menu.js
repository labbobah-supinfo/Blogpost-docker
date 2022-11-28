import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import App from './App';
import Form from './Form';


export default function Menu(){
    const [status, setStatus] = useState(true);
    return(
        <Router>
            <nav>
                <div className="nav-wrapper">
                    <a href="" className="brand-logo" onClick={()=>setStatus(!status)}>
                        {status ? "Login": "Logout"}
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/App">Index</Link></li>
                        <li><Link to="/Form">Blog</Link></li>
                        <li><Link to="/">JavaScript</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route exact path='/App' element={<App/>}></Route>
                <Route exact path='/Form' element={<Form/>}></Route>
                <Route exact path='/' element={<App/>}></Route>
            </Routes>
        </Router>   
    );
}