import React, { Component } from 'react';

import './SearchBox.css';

class SearchBox extends Component {

	constructor(props){
		super();
	}
	
	render() {
		return (
			<div className="pa2">
				<input 
				className="tc pa3 ba b--lightest-blue bg-lightest-blue"
				type="search/"
				placeholder="search"
				onChange={this.props.searchChange} 
				/>
			</div>
		);
	}
}

export default SearchBox;