import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));

const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/about/:id" element={<AboutUs />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
};

export default App;
