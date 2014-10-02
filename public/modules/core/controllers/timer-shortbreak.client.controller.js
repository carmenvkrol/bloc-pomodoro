'use strict';

angular
  .module('core')
  .controller('TimerShortBreakController', ['$scope', '$interval', '$state', '$stateParams', 'Timer',

    function ($scope, $interval, $state, $stateParams, Timer) {

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