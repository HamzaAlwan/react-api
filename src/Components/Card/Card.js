import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
	}

	fetchData() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json,
				})
			});
		}

	render() {
		let { isLoaded, items } = this.state;
		console.log(items)

		if(!isLoaded){
			return <h1 className="tc pa3 ma3 bw2">Loading Data...</h1>;
		}
		else {
			return <h1>loaded</h1>
		}
		
	}
}

export default Card;