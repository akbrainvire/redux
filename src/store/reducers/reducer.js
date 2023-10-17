
const reducer = (state = {counter : 0}, action) => {

    switch(action.type){    
        case "INC" : 
            return state = {...state, counter: state.counter + action.payload}; 
        case "DEC" : 
            return state = {...state, counter: state.counter - action.payload};
        default : return state;
    }

}

export default reducer;