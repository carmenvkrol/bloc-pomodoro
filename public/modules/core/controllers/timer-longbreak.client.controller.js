'use strict';

angular
  .module('core')
  .controller('TimerLongBreakController', ['$scope', '$state', 'Timer',

    function ($scope, $state, Timer) {

      $scope.timerRunning = false;

      $scope.countdown = 5; // 15 minutes = 112500

      Timer.init($scope);

      $scope.startTimer = function (){
        Timer.startTimer();
      };
      
      $scope.stopTimer = function (){
        Timer.stopTimer();
      };

      $scope.resetTimer = function() {
        $scope.startTimer();
        Timer.resetTimer(112500);
      };
    
    }

]);