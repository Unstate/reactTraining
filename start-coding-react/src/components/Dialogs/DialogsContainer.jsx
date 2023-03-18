import Dialogs from "./Dialogs";
import { createMessage, onMessageChange } from "../../Redux/dialogsReducer";
import { connect } from "react-redux";


let mapStateToProps = (state) =>{

    return {
        message: state.message,
    }
}

const obj = {createMessage, onMessageChange}

const DialogsContainer = connect(mapStateToProps, obj) (Dialogs);

export default DialogsContainer;