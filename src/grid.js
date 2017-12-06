class Grid {
	constructor(width, height, initial=0) {
		this.width = width;
		this.height = height;

		this.grid = new Array(width);
		for (var i = 0; i < width; i++) {
		  this.grid[i] = new Array(height);
          for (var j = 0; j < height; j++) {
            this.grid[i][j] = initial;
          }
		}
	}

	get(x, y) {
		return this.grid[x][y];
	}

	set(x,y,val) {
		this.grid[x][y]=val;
	}

	getColumn(x) {
		return this.grid[x];
	}

	getRow(y) {
		var row = new Array(this.width);

		for (var i = 0; i < this.width; i++) {
			row[i] = this.get(i, y);
		}

		return row;
	}

	setColumn(x, array) {
		if(this.height !== array.length) {
			console.log("Array length not equal to column height");
		}
		else {
			this.grid[x] = array;
		}
	}

	setRow(y, array) {
		if(this.width !== array.length) {
			console.log("Array length not equal to row width");
		}

		for (var i = 0; i < this.width; i++) {
			this.set(i, y, array[i]);
		}
	}

	reGrid(width, height, initial) {
		this.width = width;
		this.height = height;

		this.grid = new Array(width);
		for (var i = 0; i < width; i++) {
		  this.grid[i] = new Array(height);
          for (var j = 0; j < height; j++) {
            this.grid[i][j] = initial;
          }
		}
	}
};

export default Grid;