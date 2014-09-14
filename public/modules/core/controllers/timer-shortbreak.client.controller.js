'use strict';

angular
  .module('core')
  .controller('TimerShortBreakController', ['$scope', '$state', '$stateParams', 'Timer',

    function ($scope, $state, $stateParams, Timer) {

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

      $scope.$on('timer-stopped', function (event, data){
        console.log(data);
        if (data.seconds === 0 && data.minutes === 0) {
          $state.go('dashboard.pomodoroTimer');
        }
      });
    
    }

]);