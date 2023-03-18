import React from "react";
import { addPost, onPostChange } from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    // debugger
    return {
        profile: state.profile.postsData,
        newPostText: state.profile.newPostText,
    }
}

const obj = {addPost,onPostChange}

const MyPostsContainer = connect(mapStateToProps,obj) (MyPosts)

export default MyPostsContainer;