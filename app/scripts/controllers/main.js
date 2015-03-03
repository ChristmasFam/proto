'use strict';

/**
 * @ngdoc function
 * @name protoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the protoApp
 */
angular.module('protoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
