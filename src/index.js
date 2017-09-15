import Katex from "katex";

// <math-inline expression="ax^2 + bx + c = 0"></math-inline>

var InlineMathPrototype = Object.create(HTMLElement.prototype);

InlineMathPrototype.createdCallback = function() {
  var expression = this.getAttribute("expression");
  this.attributeChangedCallback("expression", null, expression);
};

InlineMathPrototype.attributeChangedCallback = function(
  attributeName,
  oldValue,
  newValue
) {
  if (attributeName === "expression") {
    Katex.render(newValue, this);
  }
};

window.InlineMathElement = document.registerElement("math-inline", {
  prototype: InlineMathPrototype
});

// <math-display expression="ax^2 + bx + c = 0"></math-display>

var DisplayMathPrototype = Object.create(HTMLElement.prototype);

DisplayMathPrototype.createdCallback = function() {
  var expression = this.getAttribute("expression");
  this.attributeChangedCallback("expression", null, expression);
};

DisplayMathPrototype.attributeChangedCallback = function(
  attributeName,
  oldValue,
  newValue
) {
  if (attributeName === "expression") {
    Katex.render(this.innerText, this, { displayMode: true });
  }
};

window.DisplayMathElement = document.registerElement("math-display", {
  prototype: DisplayMathPrototype
});
