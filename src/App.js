import React, { useContext } from 'react';
import './App.css';
import { FirstContext, SecondContext } from './contexts';
import FirstComponent from './firstComponent';
import SecondComponent from './secondComponent';

function App() {
    const firstContextValue = useContext(FirstContext);
    const secondContextValue = useContext(SecondContext);

    return (
        <div className="App">
            <header className="App-header">
                <p>Значение из первого контекста: {firstContextValue}</p>
                <p>Значение из второго контекста: {secondContextValue}</p>
                <FirstComponent />
                <SecondComponent />
            </header>
        </div>
    );
}

export default App;