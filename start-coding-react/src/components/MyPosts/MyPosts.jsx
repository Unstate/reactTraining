import React from "react";
import classes from './MyPosts.module.css';
import './MyPosts.module.css';
import Post from "./Posts/Post";



const MyPosts = (props) => {

    // debugger

    let postElements = props.profile.map((post) => <Post message={post.message} likesCount={post.likesCount}></Post>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        // debugger
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }

    return (
        <div className={classes.aboutPosts}>
            <h3>My Posts</h3>
            <div className={classes.posts}>
                {
                    postElements
                }
            </div>
            <div>
                <div className="">
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div className="">
                    <button onClick={addPost}>Add a post</button>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;