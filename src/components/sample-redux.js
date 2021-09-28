import { createStore } from "redux";

// Actions

const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

const reset = () => {
    return {
        type: 'RESET'
    };
}

// reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

// Store
let store = createStore(counter);

function SampleReduxExample() {
    store.subscribe(() => {
        console.log(store.getState());
    })

    // DISPATCH

    return(
        <>
            <button onClick={() => store.dispatch(increment())}>Increment</button>
            <button onClick={() => store.dispatch(decrement())}>Decrement</button>
            <button onClick={() => store.dispatch(reset())}>Reset</button>
        </>
    )
}

export default SampleReduxExample;