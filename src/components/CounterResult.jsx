import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountAction } from '../redux/actions/counterActions';

const CounterResult = () => {
    const dispatch = useDispatch();
    const { count, setCount } = useSelector(state => state.countValue);
    return (
        <div>
            <h1>Counter Result in another page</h1>
            <h2>Count Value from Redux: {count}</h2>
            <div>
                <button onClick={() => setCount(5)}>setCountLocal to 5</button>
                <button onClick={() => setCount(10)}>setCountLocal to 10</button>
            </div>
            <div style={{ marginTop: "10px" }} >
                <button onClick={() => dispatch(getCountAction(count + 1))}>Increment Redux</button>
                <button onClick={() => dispatch(getCountAction(count - 1))}>Decrement Redux</button>
            </div>
        </div>
    )
}

export default CounterResult