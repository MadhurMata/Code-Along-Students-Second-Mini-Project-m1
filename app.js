'use strict';

function main(){
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var links = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Movies',
      url: '/movies'
    }
  ];
  var rootElement = document.querySelector('#root')

  generateLayout();
  generateNavbar();
  çactivateRouter();

  function generateLayout(){
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  };

  function generateNavbar(){
    navbarInstance = new Navbar(layoutInstance.header, links );
    navbarInstance.generate();

  };

  function activateRouter(){
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main);
  };
};

window.addEventListener('load', main);