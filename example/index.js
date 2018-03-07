var angular = require('../dist')

angular
  .module('app', [])
  .component('myApp', {
    template: '<h1>Hello {{$ctrl.hello}}</h1>',
    controller: function () {
      var ctrl = this

      ctrl.hello = 'world'
    }
  })


var body = document.querySelector('body')

body.appendChild(document.createElement('my-app'))
angular.element(document).ready(() => angular.bootstrap(body, ['app'], { strictDi: false }))
