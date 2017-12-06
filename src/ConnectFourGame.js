import React, { Component } from 'react';
import Grid from './grid.js';
import Column from './Column';
import NewGame from './NewGame';
import './ConnectFourGame.css';

class ConnectFourGame extends Component {

	constructor(props) {
		super(props);

		var grid = new Grid(props.width, props.height, 0);

		var columns = [];

		for (var i = 0; i < props.width; i++) {
			columns.push(grid.getColumn(i));
		}

		this.state = { winlen : props.winlen, winner: 0, turn: 1, width: props.width, height: props.height, grid: grid, columns: columns };

		this.playColumn = this.playColumn.bind(this);
		this.findWinner = this.findWinner.bind(this);

		this.startOver = this.startOver.bind(this);
	}

	startOver(width, height, winlen) {

		this.setState({height: height, width: width, winlen: winlen});

		const newGrid = this.state.grid;
		newGrid.reGrid(this.state.width, this.state.height, 0);

		const newColumns = [];

		for (var i = 0; i < this.state.width; i++) {
			newColumns.push(newGrid.getColumn(i));
		}

		this.setState({ winner: 0, turn: 1, grid: newGrid, columns: newColumns });
	}

	findWinner() {
		for (var x = 0; x < this.state.grid.width; x ++) {
			for (var y = 0; y < this.state.grid.height; y++) {
				if(this.state.grid.get(x,y) !== 0 && this.squareWins(x,y,this.state.grid, this.state.grid.get(x,y), this.state.winlen)) {
					return this.state.grid.get(x,y);
				}
			}
		}
		return 0;
	}

	squareWins(x, y, grid, player, len) {
		return this.winsVert(x, y, grid, player,len) || this.winsHorizontal(x,y, grid, player, len) || this.winsDiag(x,y,grid,player,len);
	}

	//checks whether a win is present from this square vertically
	winsVert(x, y, grid, player, len) {
		if (len === 0) {
			return true;
		}
		else if (y >= grid.height) {
			return false;
		}
		else if (grid.get(x,y) !== player) {
			return false;
		}
		else {
			return this.winsVert(x, y+1, grid, player, len-1);
		}
	}

	//checks whether win is present from this square horizontally
	winsHorizontal(x, y, grid, player, len) {
		if (len === 0) {
			return true;
		}
		else if (x >= grid.width) {
			return false;
		}
		else if (grid.get(x,y) !== player) {
			return false;
		}
		else {
			return this.winsHorizontal(x+1, y, grid, player, len-1);
		}
	}

	//checks whether win is present from this square diagonally
	winsDiag(x, y, grid, player, len) {
		if (len === 0) {
			return true;
		}
		else if (x >= grid.width || y >= grid.height) {
			return false;
		}
		else if (grid.get(x,y) !== player) {
			return false;
		}
		else {
			return this.winsDiag(x+1, y+1, grid, player, len-1);
		}
	}

	playColumn(i) {

		if (this.state.winner !== 0) {
			return;
		}

		if (this.state.grid.get(i, 0) !== 0) {
			return;
		}

		var ind = 0;
		while (ind < this.state.height && this.state.grid.get(i, ind) === 0) {
			ind++;
		}
		ind--;

		var toPlay = this.state.turn;

		const newGrid = this.state.grid;
		newGrid.set(i, ind, toPlay);

		const newCols = this.state.columns;
		newCols[i] = newGrid.getColumn(i);

		this.setState({grid : newGrid, columns : newCols, turn : (toPlay === 1 ? 2 : 1)});
		this.setState({ winner : this.findWinner() });
	}

	testClick() {
		console.log("test click.");
	}

	render() {
		return (
		  <div className="ConnectFourGame" onClick={this.testClick}>
		  	<div className="GameArea">
		  		<NewGame height={this.state.height} width={this.state.width} winlen={this.state.winlen} startOver={this.startOver} />
					<div className="Board">
				  	{this.renderWinner()}
					{this.renderColumns()}
					</div>
			</div>
		  </div>
		);
	}

	renderWinner() {
		if (this.state.winner === 0) {
			return;
		}
		return (
			<div className="Winner">
				Winner : {this.state.winner}!
			</div>
		);
	}

	renderColumns() {
		return this.state.columns.map((c, index) => (
			<Column key={index} index={index} grid={this.state.grid} col={this.state.grid.getColumn(index)} playColumn={this.playColumn}/>
		));
	}
}

export default ConnectFourGame;
