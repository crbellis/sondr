import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
