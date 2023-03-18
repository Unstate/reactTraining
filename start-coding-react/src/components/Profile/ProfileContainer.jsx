import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "./../../Redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }}></Component>
        )
    }
    return ComponentWithRouterProp
}

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        // debugger
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 28333;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            // debugger
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profileUser={this.props.profileUser} ></Profile>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profileUser: state.profile.profileUser,
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile, })(withUrlDataContainerComponent)