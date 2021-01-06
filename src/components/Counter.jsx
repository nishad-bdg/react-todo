import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increament, decreament, increamentByAmount } from '../slices/counterSlice'


const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementValue, setIncrementValue] = useState(2)
    return (
        <div>
            <h1>Counter App {incrementValue}</h1>
            <div className="d-flex flex-row align-items-center justify-content-center mt-4">
                <div>
                    <button className="btn btn-success" onClick={() => dispatch(increament())} >+</button>
                </div>
                <div className="mx-3">{count}</div>
                <div><button className="btn btn-danger" onClick={() => dispatch(decreament())}>-</button></div>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center mt-4">
                <div>
                    <input type="text" className="form-control" value={incrementValue} onChange={e => setIncrementValue(e.target.value)} />
                </div>
                <div className="mx-3">
                    <button className="btn btn-success" onClick={ () => dispatch(increamentByAmount(incrementValue)) }>
                        Add Amount
                    </button>
                </div>
                <div><button className="btn btn-danger">Async Add Amount</button></div>
            </div>
        </div>
    )
}

export default Counter
