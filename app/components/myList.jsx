import React,{ Component } from 'react';
var ListItem2 = require('./myLi.jsx')
// Parent Component
class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem2 quantity="1" name="父Dom元素的name属性1"><a href="a">Bread</a></ListItem2>
				<ListItem2 quantity="6" name="父Dom元素的name属性2">Eggs</ListItem2>
				<ListItem2 quantity="2" name="父Dom元素的name属性2">Milk</ListItem2>
			</ul>
		);
	}
}

module.exports = GroceryList;