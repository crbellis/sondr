import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<h1>Coming Soon</h1>
			<h6>
				Illustrations by:{" "}
				<a href="https://storyset.com/">Storyset by Freepik</a>
			</h6>
		</footer>
	);
};

export default Footer;
