'use strict';

angular
  .module('core')
  .controller('TimerController', ['$scope', '$state', 'Timer',

    function ($scope, $state, Timer) {

      $scope.timerRunning = false;
      
      $scope.countdownPomodoro = 5; // 25 minutes = 937500

      $scope.countdownShortBreak = 5; // 5 minutes = 7500

      $scope.countdownLongBreak = 112500; // 15 minutes = 112500

      Timer.init($scope);

      $scope.startTimer = function (){
        Timer.startTimer();
      };
      
      $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
      };
      $scope.resetTimer = function () {
        Timer.resetTimer(function () {
          $scope.countdownPomodoro = 937500;
          $scope.$broadcast('timer-set-countdown', $scope.countdownPomodoro);
        });
      };
      $scope.resetTimer = function (timerType){
        if (timerType === 'pomodoro') {
          //$scope.startTimer();
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

    }

  ]);