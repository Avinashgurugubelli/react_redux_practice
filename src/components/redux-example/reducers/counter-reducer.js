const counterReducer = (state = 0, action) => {
    const range = action.payload ? action.payload : 1;
    switch (action.type) {
        case 'INCREMENT':
            return state + range;
        case 'DECREMENT':
            return state - range;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

export default counterReducer;