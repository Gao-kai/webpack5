import React,{Component } from 'react';
import ReactDom from "react-dom";
import About from './About.jsx';
import Home from './Home.jsx';
import {
	BrowserRouter,
	Link,
	Route,
	Routes
}from "react-router-dom"


class App extends Component {
	constructor(props) {
	    super(props);
		console.dir(Home);
	}
	
	render(){
		return(<div>
			<BrowserRouter>
				<Link to="/home">首页</Link>
				<Link to="/about">关于</Link>
				<Route path="home" component={Home}></Route>
				<Route path="about" component={About}></Route>
			</BrowserRouter>
		</div>)
	}
}
export default App;
