/*import {Component} from 'react';

class my-li extends Component{
	render(){
		return(
			<li>
				{this.props.myattr} x {this.props.children}
			</li>
		)
	}
}
module.exports = ListItem;
*/
import React, {Component} from 'react'
// Child Component
class myLi extends Component {
	render() {
		return (
			<li>
				{this.props.quantity}× {this.props.name}
			</li>
		);
	}
}
module.exports = myLi;