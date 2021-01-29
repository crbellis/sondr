import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={classes.Header}>
			<div className={classes.Logo}>
				<NavLink to="/" className={classes.LogoNav}>
					SONDR
				</NavLink>
			</div>
			<div className={classes.NavGroup}>
				<NavLink to="/" exact className={classes.NavLink}>
					Home
				</NavLink>
				<NavLink to="/login" exact className={classes.NavLink}>
					Login
				</NavLink>
				<NavLink to="/signup" exact className={classes.CreateAccount}>
					Sign Up
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
