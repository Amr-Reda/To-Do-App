import React, { Component } from 'react';
import '../App.css';
import Item from './item.js';
import AddButton from './addButton.js';

class Profile extends Component {
	state = {
		items: [],
	};

	//get request api
	async componentDidMount() {
		const token = await this.props.getIdTokenClaims();
		fetch('/api', {
			headers: {
				authorization: `Bearer ${token.__raw}`,
			},
		})
			.then((res) => {
				res.json().then((data) => {
					this.setState({ items: data });
				});
			})
			.catch((err) => console.log(err));
	}

	//post request api
	submitData = async (data) => {
		const token = await this.props.getIdTokenClaims();
		fetch('/api', {
			headers: {
				authorization: `Bearer ${token.__raw}`,
				'Content-Type': 'application/json; charset=utf-8',
			},
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((res) => {
				res.json().then((data) => {
					this.setState({
						items: [data, ...this.state.items],
					});
				});
			})
			.catch((err) => console.log(err));
	};

	//delete request api
	removeData = async (id) => {
		const token = await this.props.getIdTokenClaims();
		fetch(`/api/${id}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${token.__raw}`,
			},
		})
			.then((res) => {
				res.json().then((data) => {
					if (data.success) {
						let newData = this.state.items.filter(
							(item) => item._id !== id
						);
						this.setState({ items: newData });
					}
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className='App'>
				<AddButton
					buttonLabel={'ADD'}
					submitData={this.submitData}
				></AddButton>
				<Item
					items={this.state.items}
					removeData={this.removeData}
				></Item>
			</div>
		);
	}
}

export default Profile;
