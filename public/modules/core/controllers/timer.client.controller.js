'use strict';

angular
  .module('core')
  .controller('TimerController', ['$scope', '$state',

    function ($scope, $state) {

      $scope.timerRunning = false;
      
      $scope.countdownPomodoro = 5; // 25 minutes = 937500

      $scope.countdownShortBreak = 7500; // 5 minutes = 7500

      $scope.countdownLongBreak = 112500; // 15 minutes = 112500

      $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
      };
 
      $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
      };

      $scope.resetTimer = function (timerType){
        if (timerType === 'pomodoro') {
          $scope.startTimer();
          $scope.countdownPomodoro = 937500;
          $scope.$broadcast('timer-set-countdown', $scope.countdownPomodoro);
        }
        else if (timerType ==='shortBreak') {
          $scope.startTimer();
          $scope.countdownShortBreak = 7500;
          $scope.$broadcast('timer-set-countdown', $scope.countdownShortBreak);
        }
        else if (timerType === 'longBreak') {
          $scope.startTimer();
          $scope.countdownLongBreak = 112500;
          $scope.$broadcast('timer-set-countdown', $scope.countdownLongBreak);
        }
      };

      $scope.$on('timer-stopped', function (event, data){
        console.log('Timer Stopped - data', data);
        if (data.seconds === 0 && data.minutes === 0) {
          $state.go('dashboard.shortBreakTimer');
        }
      });

      $scope.$watch('countdownPomodoro', function(){
        console.log('countdownPomodoro has changed');
        /*if ($scope.countdownPomodoro === 0) {
          console.log('countdownPomodoro equals zero');
          $state.go('dashboard.shortBreakTimer');
        }*/
      });

    }

  ]);