import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Users = (props) => {

    const userPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VgQfD8iOpRkCyjhaqFps1H5hqVtKR_SpBw&usqp=CAU"

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) { // ПРОПИСАТЬ PAGESCOUNT ДЛЯ ПОЛУЧЕНИЯ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ
        pages.push(i)
    }

    debugger

    return (
        <div>
            <div className={classes.itemContainer}>
                {pages.map(page => {
                    return <span className={props.currentPage === page ? classes.active : classes.item} onClick={(e) => { props.onPageChanged(page) }}>{page}</span>
                })}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={classes.userContainer}>
                    <span className={classes.userLogoAndButton}>
                        <div className={classes.imgContainer}><NavLink to={`/profile/${u.id}`}><img className={classes.img} src={u.photos.small != null ? u.photos.small : userPhoto}></img></NavLink></div>
                        <div className={classes.userFollowButton}>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        })

                                }}>UnFollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                    })
                                        .then(response => {
                                             if (response.data.resultCode === 0 ) {
                                                props.follow(u.id)
                                             }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span className={classes.userText}>
                        <span>
                            <div>{u.name}</div>
                            <div className={classes.userStatus}>{u.status}</div>
                        </span>
                        <div className={classes.userLocation}>
                            <div className="">
                                Russia
                            </div>
                            {/* <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div> */}
                        </div>
                    </span>
                </div>)}
            {/* <button className={classes.buttonSeeMore} onClick={this.getUsers}>See more</button> */}
        </div>
    )
}

export default Users