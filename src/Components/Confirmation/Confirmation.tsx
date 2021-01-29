import React from "react";
import classes from "./Confirmation.module.css";
import Conf from "../../Assets/SVGs/confirmation.svg";
import FadeIn from "../HOC/FadeIn";

const Confirmation = () => {
	return (
		<FadeIn>
			<div className={classes.Confirmation}>
				<img src={Conf} alt="THANK YOU" className={classes.SVG} />
			</div>
		</FadeIn>
	);
};

export default Confirmation;
