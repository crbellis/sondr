import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.Logo}>SONDR</div>
            <div className={classes.NavGroup}>
                <NavLink to="/" exact className={classes.NavLink}>
                    Home
                </NavLink>
                <NavLink to="/login" exact className={classes.NavLink}>
                    Login
                </NavLink>
                <NavLink to="/signup" exact className={classes.CreateAccount}>
                    Create An Acccount
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
