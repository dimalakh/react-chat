const initialState = [
    {"msg":"Hello Eleks frontend camp !!","user":{"username":"andriy.vandakurov@gmail.com"},"time":1492425796026}
]

export default function chat (state = initialState, action) {
     switch (action.type) {
        case 'SEND_MESSAGE': 
            return [...state, action.payload];
        case 'RECEIVE_NEW_MESSAGE':
            return [...state, action.payload];    
        case 'RECEIVE_MESSAGES': 
            return [...action.payload];
     } 
     return state;
}

