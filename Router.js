'use strict';

function Router(){
  this.page = null;

};

Router.prototype.buildDom = function(url, parentElement){
  if(url === '/') {
    this.generateLandingPage(parentElement);
  } else if (url === '/movies') {
    this.generateMoviesPage(parentElement);
  } else {
    this.generateLandingPage(parentElement);
  };
};

Router.prototype.generateLandingPage = function() {
  page = new LandingPage(parentElement);
};

Router.prototype.generateMoviesPage = function() {
  page = new MoviesPage(parentElement);
};


var routerInstance = new Router();