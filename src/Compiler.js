const Lexer = require('./Lexer');
const Parser = require('./Parser');
const Builder = require('./Builder');

module.exports = class Compiler {
  constructor() {
    this.lexer = new Lexer();
    this.parser = new Parser();
    this.builder = new Builder();
  }
  reset() {
    this.lexer.reset();
    this.parser.reset();
  }
  compile(shp) {
    this.lexer.tokenize(shp);
    this.parser.parse(this.lexer.tokens);
    let temp = document.createElement('div');
    temp.innerHTML = this.builder.build(this.parser.root);
    return Array.from(temp.children);
  }
}
