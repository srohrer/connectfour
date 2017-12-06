import React, { Component } from 'react';
import './NewGame.css';

class NewGame extends Component {

	constructor(props) {
		super(props);

		this.state = ({ height : props.height, width: props.width, winlen: props.winlen});

		this.upWidth = this.upWidth.bind(this);
		this.upHeight = this.upHeight.bind(this);
		this.upWinlen = this.upWinlen.bind(this);
		this.startOver = this.startOver.bind(this);
	}

	upWidth(event) {
		this.setState({width : event.target.value});
	}

	upHeight(event) {
		this.setState({height : event.target.value});
	}

	upWinlen(event) {
		this.setState({winlen : event.target.value});
	}

	startOver() {
		this.props.startOver(this.state.width, this.state.height, this.state.winlen);
	}

	superTest() {
		console.log("big test");
	}

	render() {
		return (
			<div className="NewArea" onClick={this.superTest}>

				Width:
				<br/>
				<input type="text" onChange={this.upWidth} value={this.state.width}/>
				<br/>
				Height:
				<br/> 
				<input type="text" onChange={this.upHeight} value={this.state.height}/>
				<br/>
				Length to Win:
				<br/>
				<input type="text" onChange={this.upWinlen} value={this.state.winlen} />

				<button className="NewGame" onClick={this.startOver}>
					New Game
				</button>
			</div>
		);
	}

}

export default NewGame;
