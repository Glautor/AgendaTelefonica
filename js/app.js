var app = angular.module("listaTelefonica", ["ngMessages", "ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when('/index2', {templateUrl: 'index2.html', controller: 'listaTelefonicaCtrl'});
  $routeProvider.when('/index3', {templateUrl: 'index3.html', controller: 'index3Ctrl'});
  $routeProvider.when('/index4', {templateUrl: 'index4.html', controller: 'index4Ctrl'});
});