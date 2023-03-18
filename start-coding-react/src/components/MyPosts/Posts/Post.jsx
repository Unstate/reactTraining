import React from 'react'
import './Post.module.css'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIsmpJQm0OTBcGyY-Y3ECq4UMpN2lAcagoQ&usqp=CAU"></img>
                <span>{props.message}</span>
                <div>Likes: <span>{props.likesCount}</span></div>
            </div>
        </div>
    );
}

export default Post;