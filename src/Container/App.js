import React, { Component } from 'react';

import './App.css';
import Cards from '../Components/Cards/Cards';
import SearchBox from '../Components/SearchBox/SearchBox';

class App extends Component {
	constructor(){
		super();
		this.state = {
			searchField: '',
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

	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value
		})
	}

	render() {
		let { searchField, isLoaded, users } = this.state;
		let filteredUsers = users.filter(user => {
			return user.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return (
			<div className="tc">
				<h1>Robo Users</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Cards 
				filteredUsers={filteredUsers} 
				search={searchField}
				Loaded={isLoaded}
				 />
			</div>
		);
	}
}	

export default App;