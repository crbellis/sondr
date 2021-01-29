import React from "react";
import FadeIn from "../HOC/FadeIn";
import classes from "./Signup.module.css";

const Signup = () => {
	return (
		<div className={classes.Wrapper}>
			<FadeIn>
				<div className={classes.SignupWrapper}>
					<section className={classes.Section}>
						<div className={classes.SignupColumn}>
							<div className={classes.Info}>
								<div className={classes.Logo}>SONDR</div>
								<h2 className={classes.SubHeader}>
									SONDR is currently in development.
								</h2>
								<h5 className={classes.TagLine}>
									Sign up to be notified for updates!
								</h5>
							</div>
							<div className={classes.CardWrapper}>
								<div className={classes.Card}>
									<div>
										<div className={classes.Label}>
											Email
											<div className={classes.Required}>
												*
											</div>
										</div>
										<div className={classes.Form}>
											<input placeholder="example@email.com" />
											<button type="submit">
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</FadeIn>
		</div>
	);
};

export default Signup;
