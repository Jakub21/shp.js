
class Node {
  constructor(tag, scopeless=false) {
    this.tag = tag;
    this.parameters = {};
    this.children = [];
    this.scopeless = scopeless;
    this.isText = false;
    this.parent = undefined;
  }
  addParameter(key, value) {
    if (this.parameters[key] == undefined) {
      this.parameters[key] = value;
    } else {
      this.parameters[key] += ' ' + value;
    }
  }
  appendChild(child) {
    this.children.push(child);
    child.parent = this;
  }
  appendText(text) {
    let lastNode = this.children[this.children.length-1];
    if (lastNode.tag == '__text__') {
      lastNode.text += ' ' + text;
    } else {
      this.appendChild(new ShpNodeText(text));
    }
  }
}
module.exports.Node = Node;

class TextNode extends Node {
  constructor(text) {
    super('__text__', true);
    this.text = text;
    this.isText = true;
  }
}
module.exports.TextNode = TextNode;
