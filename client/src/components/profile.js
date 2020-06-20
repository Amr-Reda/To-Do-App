import React, { Component } from 'react';
import '../App.css';
import Item from './item.js';
import AddButton from './addButton.js';
import { connect } from 'react-redux'
import {fetchItems, postItem, deleteItem} from '../actions'
class Profile extends Component {

	//get request api
	async componentDidMount() {
		const token = await this.props.getIdTokenClaims();
		this.props.fetchItems(token.__raw)
	}

	//post request api
	submitData = async (data) => {
		const token = await this.props.getIdTokenClaims();
		this.props.postItem(token.__raw, data)
	};

	//delete request api
	removeData = async (id) => {
		const token = await this.props.getIdTokenClaims();
		this.props.deleteItem(token.__raw, id)
	};

	render() {
		return (
			<div className='App'>
				<AddButton
					buttonLabel={'ADD'}
					submitData={this.submitData}
				></AddButton>
				<Item
					items={this.props.items}
					removeData={this.removeData}
				></Item>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items
	}
}

const mapDispatchToProps =  {
	fetchItems,
	postItem,
	deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
