import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirstContext, SecondContext } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <FirstContext.Provider value="Арбуз">
            <SecondContext.Provider value="Квадратный">
                <App />
            </SecondContext.Provider>
        </FirstContext.Provider>
    </React.StrictMode>
);