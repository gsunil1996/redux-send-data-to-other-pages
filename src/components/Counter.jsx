import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountAction, setCountAction } from '../redux/actions/counterActions';

const Counter = () => {
    const [count, setCountLocal] = useState(0);
    const dispatch = useDispatch();
    const countFromRedux = useSelector(state => state.countValue.count);

    const setCountGlobal = (payload) => {
        setCountLocal(payload);
        dispatch(getCountAction(payload))
    }

    useEffect(() => {
        dispatch(setCountAction(setCountLocal));
    }, [dispatch]);

    return (
        <div style={{ marginTop: "20px" }} >
            <h1>Counter</h1>
            <h2> Local count: {count}</h2>
            <h2>Redux count: {countFromRedux}</h2>
            <button onClick={() => setCountGlobal(count + 1)}>Increment Local + Redux</button>
            <button onClick={() => setCountGlobal(count - 1)}>Decrement Local + Redux</button>
        </div>
    )
}

export default Counter