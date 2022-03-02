import React,{Component } from 'react';
import ReactDom from "react-dom";

class App extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			message:"hello world"
		}
	}
	
	render(){
		return(<div>{this.state.message}</div>)
	}
}
export default App;
