class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.space = this.createSpaces();
  }

  /**
   * Generates 2D array of spaces.
   * @return  {Array}     An array of space objects
   */

  createSpaces() {
    let spaces = [];
    /*  for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.columns; y++) {
        let space = new Space(x, y);
        spaces.push(space);
      }
    } */

    let column = [];
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
  }
}
