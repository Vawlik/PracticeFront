import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/about/:id" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;