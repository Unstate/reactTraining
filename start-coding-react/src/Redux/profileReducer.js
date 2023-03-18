const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        { likesCount: 10, message: 'Nice to meet u in my blog' },
        { likesCount: 12, message: "It was my first message" },
        { likesCount: 124, message: "I learn porgramming and i guess i can find my first job soon" },
        { likesCount: 33, message: "If i can`t do this after 3 mounts i will start work harder" },
        { likesCount: 231, message: "I think that i bad in programming now" },
        { likesCount: 11111, message: "But a few month ago this situation will change! Trust me" },
    ],
    profileUser: null,
    newPostText: "Nice to meet u",
}

const profileReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost],    
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { 
                ...state,
                newPostText: action.newText
             }     
        }
        case SET_USER_PROFILE: {
            return {...state, profileUser: action.profileUser}
        }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST,
    }
}

export const onPostChange = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const setUserProfile = (profileUser) => {
    return {
        type: SET_USER_PROFILE,
        profileUser
    }
}

export default profileReducer