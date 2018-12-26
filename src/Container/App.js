import React, { Component } from 'react';

import './App.css';
import Cards from '../Components/Cards/Cards';
import SearchBox from '../Components/SearchBox/SearchBox';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
	constructor(){
		super();
		this.state = {
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value
		})
	}

	render() {
		return (
			<div className="tc">
				<h1>Robo Users</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<ErrorBoundary>
					<Cards search={this.state.searchField} />
				</ErrorBoundary>
			</div>
		);
	}
}	

export default App;