import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Explore from "./screens/Explore";
import Search from "./screens/Search";

function App() {
	return (
		<BrowserRouter>
			<Header accountName='Suryansh' />
			<Route path='/' exact component={Explore} />
			<Route path='/search' exact component={Search} />
		</BrowserRouter>
	);
}

export default App;
