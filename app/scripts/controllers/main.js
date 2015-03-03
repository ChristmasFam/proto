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
    $scope.messages = [
      {
        id: 1,
        type: 'alert',
        triggerMessage: "You are 18% behind your quota.",
        triggerDetailLinkText: "see detail",
        notifications: [
          {
            person: "John Smith",
            type: "viewed",
            timestamp: "8:12am"
          }
        ],
        actionList: [
          {
            type: 'schedule',
            message: "Schedule a meeting with John Smith",
            options: [
              "9:00 am",
              "10:00 am",
              "5:00 pm"
            ]
          }
        ]
      },
      {
        id: 2,
        type: 'news',
        triggerMessage: "News bulletin about cool stuff",
        actionList: [
          {
            type: 'slack',
            message: "Join the Slack channel",
            url: "http://slack.com"
          }
        ]
      }
    ];
  })
  .directive('protoMessage', function() {
    return {
      templateUrl: function(elem, attr) {
        return 'views/protomessage-' + attr.type + '.html';
      }
    };
  });
