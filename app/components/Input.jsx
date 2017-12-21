import React,{Component} from 'react';

class Input extends Component{
	clickHandler(){
		var text = this.refs.inputText.value;
		alert(text);
		this.refs.inputText.focus();
		
	}
	

	/**
	 * onClick事件必须bind this，不然报错 TypeError: this is undefined
	 * 2017-12-22
	 **/
	render() {
		//var clickHandler = ()=>this.refs.inputText.focus();
		return(
			<div className="id">
				<input type="text" ref="inputText" />
				<input type="button" onClick={this.clickHandler.bind(this)} value="OK" />
			</div>
		)
	}
}

export default Input;