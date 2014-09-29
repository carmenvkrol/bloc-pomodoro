'use strict';

angular
  .module('core')
  .controller('TimerShortBreakController', ['$scope', '$state', '$stateParams', 'Timer', 'Ding',

    function ($scope, $state, $stateParams, Timer, Ding) {

      $scope.timerRunning = false;

      $scope.countdown = 5; // 5 minutes = 7500

      Timer.init($scope);

      $scope.startTimer = function (){
        Timer.startTimer();
      };
      
      $scope.stopTimer = function (){
        Timer.stopTimer();
      };

      $scope.resetTimer = function() {
        $scope.startTimer();
        Timer.resetTimer(7500);
      };

      $scope.switchTimer = function() {
        Ding.ding();
        $scope.counters.shortBreakCounter += 1;
        //$('#pomodoroLink').click();
      };

      $scope.$on('timer-stopped', function (event, data){
        if (data.seconds === 0 && data.minutes === 0) {
          $scope.switchTimer();
        }
      });
    
    }

]);