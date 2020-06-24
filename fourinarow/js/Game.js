class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  /**
   * Creates 2 player objects
   * @return {array} an array of 2 player objects
   */

  createPlayers() {
    const players = [
      new Player("Player 1", 1, "#e15258", true),
      new Player("Player 2", 2, "#e59a13"),
    ];
    return players;
  }
}
