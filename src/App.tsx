import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Signup from "./Containers/Signup/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Confirmation from "./Components/Confirmation/Confirmation";
import Login from "./Components/Login/Login";
// import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/confirmation">
						<Confirmation />
					</Route>
				</Switch>
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
