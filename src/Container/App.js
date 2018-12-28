import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Cards from '../Components/Cards/Cards';
import SearchBox from '../Components/SearchBox/SearchBox';
import { setSearchField } from '../redux/actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value))
	};
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => {
				this.setState({
					isLoaded: true,
					users: data
				});
			});
	}

	render() {
		const { isLoaded, users } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredUsers = users.filter(user => {
			return user.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>Robo Users</h1>
				<SearchBox searchChange={onSearchChange} />
				<Cards
					filteredUsers={filteredUsers}
					search={searchField}
					Loaded={isLoaded}
				/>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
