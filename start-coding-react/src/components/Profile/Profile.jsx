import React from "react";
import classes from './../Profile/Profile.module.css';
import './../Profile/Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostContainer";



const Profile = (props) => {

    console.log(props)

    return (
        <div className={classes.content}>
            <div className="">
                {props.aboutMe}
            </div>
            <ProfileInfo profileUser = {props.profileUser}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;