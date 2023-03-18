const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

let initialState = {
    
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: "How a u" },
        { id: 3, message: "Gutten Morgen!" },
        { id: 4, message: "I hope i can find my first job soon" },
        { id: 5, message: "Yes, u can do it! I believe in u" },
        { id: 6, message: "I appreciate it, bro!" },
    ],
    dialogsData: [
        { id: 1, name: 'Roman' },
        { id: 2, name: "Aleksey" },
        { id: 3, name: "Natasha" },
        { id: 4, name: "Kostroma" },
        { id: 5, name: "Maria" },
        { id: 6, name: "Olga" },
    ],
    newMessageText: "",

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = { id: state.messagesData.length + 2, message: action.message }

            return  {
                ...state,
                newMessageText: '',
                messagesData:[...state.messagesData, newMessage]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        default:
            return state
    }
}

export const createMessage = (text) => {
    return {
        type: ADD_MESSAGE,
        message: text,
    }
}

export const onMessageChange = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
}

export default dialogsReducer;