import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	constructor(props){
		super(props);
		this.state = {
			users: [],
			isLoaded: false
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					users: json
				})
			});
		}

	render() {
		let { isLoaded, users } = this.state;
		let imgSrc = 'https://robohash.org/'
		if(!isLoaded){
			return <h1 className="tc pa3 ma3 bw2">Loading Data...</h1>;
		}
		else {
			return (
				<div>
					{ users.map(user => (
						<div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
							<img src={`https://robohash.org/${user.username}`} alt="img"/>
							<div className="tc">
								<h2>{ user.name }</h2>
								<p>{ user.email }</p>
							</div>
						</div>
					))}
				</div>
			);
		}	
	}
}

export default Card;