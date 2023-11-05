// initial state
const initialState ={
    value: 0,
};


// create reducer function
function conterReducer(state = initialState, action){
    if(action.type === 'incriment'){
        return{
            ...state,
            value: state.value + 1,
        };
    }
    else if(action.type === 'decrement'){
        return{
            
            ...state,
            value: state.value - 1,
        };
    }
    else{
        return state
    }
}

