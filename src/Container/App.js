import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Cards from '../Components/Cards/Cards';
import SearchBox from '../Components/SearchBox/SearchBox';
import { setSearchField, requestUsers } from '../redux/actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchUsers.searchField,
		users: state.requestUsers.users,
		isPending: state.requestUsers.isPending,
		error: state.requestUsers.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		onRequestUsers: () => dispatch(requestUsers())
	};
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoaded: false
		};
	}

	componentDidMount() {
		this.props.onRequestUsers();
	}

	render() {
		const { searchField, onSearchChange, users, isPending } = this.props;
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
					isPending={isPending}
				/>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
