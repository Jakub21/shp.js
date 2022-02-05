const Compiler = require('./Compiler');

let _build = (shp) => {
  let compiler = new Compiler();
  return compiler.compile(shp);
}

module.exports.append = (parent, shp) => {
  for (let node of _build(shp)) {
    parent.append(node);
  }
}

module.exports.prepend = (parent, shp) => {
  for (let node of _build(shp)) {
    parent.prepend(node);
  }
}
