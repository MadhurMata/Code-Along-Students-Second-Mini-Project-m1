'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement
  this.elements = null;
};

LandingPage.prototype.generate = function() {
  this.elements = `
    <header>
      <h1>Super cool Star Wars Wed-site</h1>
      <h2>Here you can find a list of Star Wars movies</h2>
    </header>
  `;
  this.render();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}