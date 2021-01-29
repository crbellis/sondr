import React from "react";
import FadeIn from "../HOC/FadeIn";
import classes from "./Login.module.css";
import construction from "../../Assets/SVGs/construction.svg";

const Login = () => {
	return (
		<FadeIn>
			<div className={classes.Construction}>
				<img
					src={construction}
					alt="THANK YOU"
					className={classes.SVG}
				/>
				<h2 className={classes.SubHeader}>
					SONDR is currently in development.
				</h2>
				<h5 className={classes.TagLine}>
					Sign up for updates and we'll keep you up to date on
					progress.
				</h5>
			</div>
		</FadeIn>
	);
};

export default Login;
