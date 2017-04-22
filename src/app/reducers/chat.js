const initialState = [
    'hola',
    'amigo'
]

export default function chat(state = initialState, action) {
     if(action.type === 'SEND_MESSAGE') {
         return [...state, action.payload];
     }
     return state;
}