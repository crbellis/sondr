import React from "react";
import FadeIn from "../../Components/HOC/FadeIn";
import classes from "./Signup.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
	// eslint-disable-next-line
	let reg_test = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
	let isValidLogin: boolean = false;
	let history = useHistory();

	const [email, setEmail] = React.useState<string>("");

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		axios
			.post("/api/updates", {
				email: email,
			})
			.then((response) => {
				if (response.status === 200) {
					history.push("/confirmation");
				}
			});
		e.preventDefault();
	};

	if (reg_test.test(email)) {
		isValidLogin = true;
	}

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
									<form onSubmit={handleSubmit}>
										<div className={classes.Label}>
											Email
											<div className={classes.Required}>
												*
											</div>
										</div>
										<div className={classes.Form}>
											<input
												placeholder="example@email.com"
												onChange={handleChange}
											/>

											<button
												type="submit"
												disabled={!isValidLogin}
											>
												Submit
											</button>
										</div>
									</form>
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
