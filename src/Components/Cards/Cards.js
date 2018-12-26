import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
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
			.then(data => {
				this.setState({
					isLoaded: true,
					users: data
				})
			});
		}

	render() {
		let { isLoaded, users } = this.state;
		let filterUsers = users.filter(user => {
							return user.name.toLowerCase().includes(this.props.search.toLowerCase())
						})
		if(!isLoaded){
			return <h1 className="tc pa3 ma3 bw2">Loading Data...</h1>;
		}
		else {
			return (
				<div id="users-div">
					{
						filterUsers.map(user => (
							<div key={ user.id } className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
								<img src={`https://robohash.org/${ user.username }`} alt={`${ user.name } robot`}/>
								<div className="tc">
									<h2>{ user.name }</h2>
									<p>{ user.email }</p>
								</div>
							</div>
						))
					}
				</div>
			);
		}	
	}
}

export default Cards;