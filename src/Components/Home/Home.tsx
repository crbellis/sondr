import React from "react";
import Header from "../Header/Header";
import classes from "./Home.module.css";
import AnimatedSVG from "../AnimatedSVG/AnimatedSVG";
import Profile from "../../Assets/SVGs/profile";
import Hello from "../../Assets/SVGs/hello";
import Messaging from "../../Assets/SVGs/messaging";
import ProfileSettings from "../../Assets/SVGs/profile_settings";
import Post from "../../Assets/SVGs/post";
import Signup from "../../Assets/SVGs/signup";
import SignUpBlob from "../../Assets/SVGs/SignUp_Blob";
import FadeIn from "../HOC/FadeIn";

const Home = () => {
    return (
        <div className={classes.Wrapper}>
            <Header />
            <FadeIn>
                <div className={classes.Home}>
                    <section className={classes.Section}>
                        <div className={classes.Info}>
                            <div className={classes.Logo}>SONDR</div>
                            <h2 className={classes.SubHeader}>
                                Private. Transparent. Secure.
                            </h2>
                            <h5 className={classes.TagLine}>
                                A social network that’s privacy oriented, data
                                transparent, and secure.
                            </h5>
                        </div>
                        <AnimatedSVG />
                    </section>
                </div>
            </FadeIn>
            <FadeIn>
                <div className={classes.Body}>
                    <section className={classes.Section}>
                        <Profile />
                        <div className={classes.Info}>
                            <h2 className={classes.SubHeader}>The Problem.</h2>
                            <h5 className={classes.TagLine}>
                                In traditional social networks, companies use
                                personal data for profits.
                            </h5>
                        </div>
                    </section>
                </div>
            </FadeIn>
            <FadeIn>
                <div className={classes.Body}>
                    <section className={classes.Section}>
                        <div className={classes.Info}>
                            <h2 className={classes.SubHeader}>Our Solution</h2>
                            <h5 className={classes.TagLine}>
                                Your data is
                                <div className={classes.Strengthen}> your </div>
                                data. We are committed to never selling your
                                data.
                            </h5>
                        </div>
                        <Hello />
                    </section>
                </div>
            </FadeIn>
            <FadeIn>
                <div className={classes.Body}>
                    <section className={classes.Section}>
                        <div className={classes.Cards}>
                            <div className={classes.Card}>
                                <h2 className={classes.SubHeader}>Enjoy</h2>
                                <h5 className={classes.TagLine}>
                                    Encrypted Messaging
                                </h5>
                                <Messaging />
                            </div>
                            <div className={classes.Card}>
                                <h2 className={classes.SubHeader}>
                                    Transparent
                                </h2>
                                <h5 className={classes.TagLine}>
                                    Profile Settings.
                                </h5>
                                <ProfileSettings />
                            </div>
                            <div className={classes.Card}>
                                <h2 className={classes.SubHeader}>Post</h2>
                                <h5 className={classes.TagLine}>
                                    Secure Content.
                                </h5>
                                <Post />
                            </div>
                        </div>
                    </section>
                </div>
            </FadeIn>
            <FadeIn>
                <div className={classes.Body}>
                    <section className={classes.Section}>
                        <Signup />
                        <div className={classes.SignUpBlob}>
                            <SignUpBlob />
                        </div>
                        <div className={classes.SignUp}>
                            <h2 className={classes.SubHeader}>Sign Up</h2>
                            <h5 className={classes.TagLine}>
                                Starting at $1.99/month
                            </h5>
                        </div>
                    </section>
                </div>
            </FadeIn>
        </div>
    );
};

export default Home;
