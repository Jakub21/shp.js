
window.shp = {
  Builder: require('./src/Builder'),
  Lexer: require('./src/Lexer'),
  Parser: require('./src/Parser'),
  Settings: require('./src/Settings'),
  Compiler: require('./src/Compiler'),
};

Object.assign(window.shp, require('./src/alias'));
Object.assign(window.shp, require('./src/LexerState'));
Object.assign(window.shp, require('./src/ParserState'));
Object.assign(window.shp, require('./src/Node'));
Object.assign(window.shp, require('./src/Token'));
