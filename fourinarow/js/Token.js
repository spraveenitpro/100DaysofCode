class Token {
  constructor(index, owner) {
    this.id = `token-${index}-${owner.id}`;
    this.owner = owner;
    this.dropped = false;
  }
}
