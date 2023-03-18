import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"



let store = {
    _state: {
        profile: {
            postsData: [
                { likesCount: 10, message: 'Nice to meet u in my blog' },
                { likesCount: 12, message: "It was my first message" },
                { likesCount: 124, message: "I learn porgramming and i guess i can find my first job soon" },
                { likesCount: 33, message: "If i can`t do this after 3 mounts i will start work harder" },
                { likesCount: 231, message: "I think that i bad in programming now" },
                { likesCount: 11111, message: "But a few month ago this situation will change! Trust me" },
            ],
            newPostText: "JOPNAYAPIZDA",
        },
        message: {
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
        },
        sidebar: {}, 

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State has changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.message = dialogsReducer(this._state.message, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state)
    },
}

export default store;
window.state = store