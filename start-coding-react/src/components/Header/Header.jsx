import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from './../Header/Header.module.css'

const Header = (props) => {
  // debugger
  return (
    <header className={classes.header}>
      <NavLink to="/profile"><img src="https://www.logodesign.net/images/home-page-logo-03.png"></img></NavLink>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <Link to="/login">Login</Link>}
      </div>
    </header>
  );
}

export default Header;