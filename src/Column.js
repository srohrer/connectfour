import React, { Component } from 'react';
import './Column.css';

class Column extends Component {

	constructor(props) {
		super(props);

		var height = props.col.length;

		this.state = { squares: props.col, grid: props.grid, playColumn: props.playColumn, height: height };
	
		this.playCol = this.playCol.bind(this);
	}

	playCol() {
		this.state.playColumn(this.props.index);
	}

	render() {
		return (
		  <div className="Column" onClick={this.playCol}>
			{this.renderSquares()}
		  </div>
		);
	}

	calcColor(i) {
		if (i === 0) {
			return "Square";
		}
		else if (i === 1) {
			return "OneSquare";
		}
		else if (i === 2) {
			return "TwoSquare";
		}
		else {
			return "ErrorSquare";
		}
	}

	renderSquares() {
		return this.state.grid.getColumn(this.props.index).map((i,index) => (
	  		<div key={index} className={this.calcColor(i)}/>
	  	));
	}

}

export default Column;
