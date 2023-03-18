import classes from "./Dialogs.module.css"
import "./../Dialogs/Dialogs.module.css"
import { NavLink } from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.item}>
            <NavLink to={path} className={a => a.isActive ? classes.active : classes.item}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="message">
            {props.message}
        </div>
    );
}  

const Dialogs = (props) => {

    // debugger

    let dialogsElements = props.message.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}></DialogItem>)

    let messagesElements = props.message.messagesData.map((message) => <Message message={message.message}></Message>)

    let textRef = React.createRef();

    let createMessage = () => {
        let text = textRef.current.value;
        props.createMessage(text)
    }

    let onMessageChange = () => {
        let text = textRef.current.value;
        props.onMessageChange(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className="">
                <textarea placeholder="Enter your message" ref={textRef} value={props.message.newMessageText} onChange={onMessageChange}></textarea>
                <button onClick={createMessage}>Submit message</button>
            </div>
        </div>
    );
}


export default Dialogs;