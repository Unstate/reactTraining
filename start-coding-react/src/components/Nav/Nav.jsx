import React from "react";
import { NavLink } from "react-router-dom";
import './../Nav/Nav.module.css';
import classes from './../Nav/Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={hui => hui.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={hui => hui.isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" className={hui => hui.isActive ? classes.active : classes.item}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={hui => hui.isActive ? classes.active : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={hui => hui.isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={hui => hui.isActive ? classes.active : classes.item}>Settings</NavLink>
            </div>
            
        </nav>
    );
}

export default Nav;