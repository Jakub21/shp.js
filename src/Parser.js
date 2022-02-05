const {ParserStateDefault} = require('./ParserState');
const {Node} = require('./Node');

module.exports = class Parser {
  constructor() {
    this.reset();
  }

  reset() {
    this.state = new ParserStateDefault(this);
    this.root = new Node();
    this.currentScope = this.root;
    this.lastNode = this.root;
  }

  parse(tokens) {
    this.reset();
    for (let token of tokens) {
      this.state.parseToken(token);
    }
  }
}
