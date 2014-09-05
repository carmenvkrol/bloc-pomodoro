'use strict';

angular
  .module('core')
  .controller('TimerLongBreakController', ['$scope', '$state', 'Timer',

    function ($scope, $state, Timer) {

      $scope.timerRunning = false;

      Timer.init($scope);

      $scope.startTimer = function (){
        Timer.startTimer();
      };
      
      $scope.stopTimer = function (){
        Timer.stopTimer();
      };

      $scope.$on('timer-stopped', function (event, data){
        if (data.seconds === 0 && data.minutes === 0) {
          $state.go('dashboard.pomodoroTimer');
        }
      });
    
    }

]);