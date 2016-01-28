/*global Mustache */
'use strict';

var DRIVY = DRIVY || {};

(function starter () {
  var render = function render (actors) {
    var template = document.querySelector('#template').innerHTML;

    Mustache.parse(template);   // optional, speeds up future uses

    var rendered = Mustache.render(template, {'actors': actors});

    document.querySelector('#actors').innerHTML = rendered;
  };

  var button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    var car = DRIVY.getCar();
    var begin = document.querySelector('#rental .begin').value;
    var end = document.querySelector('#rental .end').value;
    var distance = document.querySelector('#rental .distance').value;
    var option = document.querySelector('#rental .option').value;

    var actors = DRIVY.payActors(car, begin, end, distance, option);

    render(actors);

    return;
  });
}());
