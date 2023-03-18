import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => { // Сделать по приколу запрос за пользователем через IDшку
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                this.props.setUserData(id, login, email)
            }
        })
    }

    render() {
        return <Header {...this.props}></Header>
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer)
