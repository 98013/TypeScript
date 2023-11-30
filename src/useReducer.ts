const { useReducer } = require('react');
const initalState = {
    name: 'Naseer',
    age: 33,
    gender: 'Male',
    time: Date.now(),
    type: 'increment'
}

const reducer = (state = initalState, action: any) => {
    switch (action.type) {
        case 'increment': {
            return { ...state, time: Date.now() }
        }
        default: {
            return state;
        }
    }
}

const [objectState, dispatch] = useReducer(reducer, initalState);





console.log(objectState);