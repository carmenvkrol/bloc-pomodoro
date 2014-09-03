'use strict';


angular
  .module('core')
  .controller('TimerController', ['$scope', '$timeout', '$rootScope',

    function($scope, $timeout, $rootScope) {

      $scope.timerRunning = false;

      $scope.countdownPomodoro = 937500;

      $scope.countdownShortBreak = 7500;

      $scope.countdownLongBreak = 112500;

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

    }

  ]);