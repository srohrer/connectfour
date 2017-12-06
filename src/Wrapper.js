import React, { Component } from 'react';
import ConnectFourGame from './ConnectFourGame';
import NewGame from './NewGame';
import './NewGame.css';

class Wrapper extends Component {

	constructor(props) {
		super(props);

		this.state = {width : 9, height : 8, winlen : 5};

		this.setWidth = this.setWidth.bind(this);
		this.setHeight = this.setHeight.bind(this);
		this.setWinlen = this.setWinlen.bind(this);	
	}

	setWidth(n) {
		this.setState({"width": n});
	}

	setHeight(n) {
		this.setState({"height": n});
	}

	setWinlen(n) {
		this.setState({"winlen": n});
	}

	render() {
		return (
			<div>
				<NewGame setHeight={this.setHeight} setWidth={this.setWidth} setWinlen={this.setWinlen}/>
				{this.height}
				<ConnectFourGame width={this.state.width} height={this.state.height} winlen={this.state.winlen}/>
			</div>
		);
	}

}

export default Wrapper;
