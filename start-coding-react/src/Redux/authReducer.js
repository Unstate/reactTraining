const SET_USER_DATA = "SET_USER_DATA"
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    id:null,
    login:null,
    email:null,
    isAuth:null,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data,isAuth:true,}
        }
        default:
            return state
    }
}

export const setUserData = (id,login,email) => {
    return ({
        type: SET_USER_DATA,
        data: {id,login,email}
    })
}

export default authReducer;