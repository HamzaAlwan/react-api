import React from 'react';
import './Cards.css';

const Cards = ({ filteredUsers, Loaded }) => {
	if(!Loaded) return <h1 className="tc pa3 ma3 bw2">Loading Data...</h1>;
	
	else {
		return (
			<div id="users-div">
				{
					filteredUsers.map(user => (
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

export default Cards;