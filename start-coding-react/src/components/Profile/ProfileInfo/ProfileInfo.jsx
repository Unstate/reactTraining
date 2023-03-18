import Preloader from "../../Preloader";
import "./ProfileInfo.module.css"
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {

    let path = "https://krot.info/uploads/posts/2021-03/1614620869_20-p-anime-fon-gorizontalnii-art-kartinki-22.jpg";

    if (!props.profileUser) {
        return <Preloader></Preloader>
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.mainImage}>
                <img src={path}></img>
            </div>
            <div className={classes.description}>
                ava + desctiption
            </div>
            <div className="">
                <div className="">My name is: {props.profileUser.fullName}</div>
                <img src={props.profileUser.photos.large}></img>
                <div className="">
                    {props.profileUser.aboutMe}
                    <div className="">
                        My Social media
                        <div className="">
                            <div className="">{props.profileUser.contacts.facebook}</div>
                            <div className="">{props.profileUser.contacts.website}</div>
                            <div className="">{props.profileUser.contacts.vk}</div>
                            <div className="">{props.profileUser.contacts.twitter}</div>
                            <div className="">{props.profileUser.contacts.instagram}</div>
                            <div className="">{props.profileUser.contacts.youtube}</div>
                            <div className="">{props.profileUser.contacts.github}</div>
                            <div className="">{props.profileUser.contacts.mainLink}</div>
                        </div>
                    </div>
                    {props.profileUser.lookingForAJob === true ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIsmpJQm0OTBcGyY-Y3ECq4UMpN2lAcagoQ&usqp=CAU"></img> : null}
                    {props.profileUser.lookingForAJobDescription}
                </div>
            </div>
        </div>
    );
}




export default ProfileInfo;