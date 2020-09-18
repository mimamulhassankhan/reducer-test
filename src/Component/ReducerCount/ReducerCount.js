import React, { useReducer } from 'react';

const initialState = {count : 0 };

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {count : state.count + 1}
        case 'DECREMENT':
            return {count : state.count - 1}   
        default:
            return state;
    }
}

const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>This is Reducer Count : {state.count}</h3>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>Increment</button>
            <br/>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>Decrement</button>
        </div>
    );
};

export default ReducerCount;