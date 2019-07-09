'use strict';

function StarWarsService() {
  this.baseUrl = 'https://swapi.co/api/';
};

StarWarsService.prototype.getAllMovies = async function(){
  console.log('object')

  var response = await fetch(`${this.baseUrl}films`);
  var data = await response.json();
return data
};

var starWarsServiceInstance = new StarWarsService();

