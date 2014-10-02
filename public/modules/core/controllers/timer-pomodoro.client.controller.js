'use strict';

angular
  .module('core')
  .controller('TimerPomodoroController', ['$scope', 'Timer',

    function ($scope, Timer) {

      $scope.countdown = Timer.countdown;
      Timer.resetTimer(5); //should be 25 minutes

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