import React, { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Cart from './components/Cart';

class App extends Component {

	constructor() {
		super();
		this.state = {
			items: [],
			id: 1
		}
	}

	handleSplit = item => {
		let itemNew = item.split("-");
		return itemNew;
	}

	handleAddItem = event => {
		event.preventDefault();
		let newItems = this.state.items;

		let itemArr = this.handleSplit(event.target[0].value)
		let itemObj = {
			name: itemArr[0],
			price: itemArr[1],
			quantity: 1,
			id: this.state.id
		}

		newItems.push(itemObj);

		this.setState({
			items: newItems,
			id: this.state.id + 1
		})
	}

	handleIncrease = id => {
		let newItems = this.state.items.map(item => {
			if (id === item.id) {
				++item.quantity;
			}
			return item
		})
		this.setState({
			items: newItems
		})
	}

	handleDecrease = id => {
		let newItems = this.state.items.map(item => {
			if (id === item.id) {
				if(item.quantity>0)
				--item.quantity;
				else
				this.handleDelete(id);
			}
			
			return item
		})
		this.setState({
			items: newItems
		})
	}

	handleDelete = id => {
		let newItems = this.state.items.filter(item => {
			if (id !== item.id) {
				return item
			}
		})
		this.setState({
			items: newItems
		})
	}

	totalPrice = () => {
		let total = 0;
		for (let i = 0; i < this.state.items.length; i++) {
			total += this.state.items[i].price * this.state.items[i].quantity
		}
		return total;
	}


	render() {
		return (
			// 
			<div className="App">
				<h1 className='storeName'>My Cart</h1>
				
				{/* adding item to the cart */}
				<AddItem
					onAdd={this.handleAddItem}
				/>

				{/* showing items in the cart */}
				<Cart
					items={this.state.items}
					onIncrease={this.handleIncrease}
					onDecrease={this.handleDecrease}
					onDelete={this.handleDelete}
				/>

				{/* printing the total sum */}
				<div className='total'><span className='ttl_1'>Total</span> <span className='ttl_2'>{this.totalPrice()}</span></div>
			</div>
		);
	}
}

export default App;
