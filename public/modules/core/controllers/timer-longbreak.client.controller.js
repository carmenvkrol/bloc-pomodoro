'use strict';

angular
  .module('core')
  .controller('TimerLongBreakController', ['$scope', 'Timer',

    function ($scope, Timer) {

      /*this.Ding = Ding;
      var self = this;*/

      $scope.countdown = Timer.countdown;
      Timer.resetTimer(5); //should be 5 minutes

      $scope.startTimer = function() {
        Timer.startTimer(5);
      };

      $scope.stopTimer = function() {
        Timer.stopTimer();
      };

      $scope.resetTimer = function() {
        Timer.stopTimer();
        Timer.resetTimer(5);
      };

    }

]);