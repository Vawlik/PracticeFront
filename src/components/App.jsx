import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../slices/counterSlice';
import './App.css';

const App = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="counter-value">{count}</div>
            <button className="button" onClick={() => dispatch(incrementByAmount(2))}>Увеличить на 2</button>
            <button className="button" onClick={() => dispatch(increment())}>Увеличить</button>
            <button className="button" onClick={() => dispatch(decrement())}>Уменьшить</button>
            <button className="button" onClick={() => dispatch(decrementByAmount(2))}>Уменьшить на 2</button>
        </div>
    );
};

export default App;