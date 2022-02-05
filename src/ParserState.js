const {Node, TextNode} = require('./Node');

class ParserState {
  constructor(parser) {
    this.parser = parser;
  }
}
module.exports.ParserState = ParserState;

class ParserStateDefault extends ParserState {
  parseToken(token) {
    if (token.type == 'TagOpen') {
      this.parser.state = new ParserStateTag(this.parser);
    } else if (['TagNameScoped', 'TagNameScopeless'].includes(token.type)) {
      let node = new Node(token.text.substr(1));
      this.parser.currentScope.appendChild(node);
      this.parser.lastNode = node;
    } else if (['ScopeOpen', 'ScopeClose'].includes(token.type)) {
      this.parser.state = new ParserStateScope(this.parser);
      this.parser.state.parseToken(token);
    } else {
      this.parser.currentScope.appendChild(new TextNode(token.text + ' '));
    }
  }
}
module.exports.ParserStateDefault = ParserStateDefault;

class ParserStateTag extends ParserState {
  constructor(parser) {
    super(parser);
    this.node = this.parser.lastNode;
    this.index = 0;
    this.lastParamKey = '';
  }
  parseToken(token) {
    if (token.type == 'TagClose') {
      this.parser.state = new ParserStateDefault(this.parser);
    } else if (token.type == 'TagId') {
      this.node.addParameter('id', token.text.substr(1));
    } else if (token.type == 'TagClass') {
      this.node.addParameter('class', token.text.substr(1));
    } else if (token.type == 'TagFlagParam') {
      this.node.addParameter(token.text.substr(1), 'true');
    } else {
      this.index += 1;
      if (this.index % 2) this.lastParamKey = token.text;
      else this.node.addParameter(this.lastParamKey, token.text);
    }
  }
}
module.exports.ParserStateTag = ParserStateTag;

class ParserStateScope extends ParserState {
  parseToken(token) {
    if (token.type == 'ScopeOpen') {
      this.parser.currentScope = this.parser.lastNode;
    } else if (token.type == 'ScopeClose') {
      this.parser.currentScope = this.parser.currentScope.parent;
    }
    this.parser.state = new ParserStateDefault(this.parser);
  }
}
module.exports.ParserStateScope = ParserStateScope;
