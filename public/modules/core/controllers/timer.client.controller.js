'use strict';

angular
  .module('core')
  .controller('TimerController', ['$scope', '$state',

    function ($scope, $state) {

      $scope.timerRunning = false;
      
      $scope.countdownPomodoro = 937500;

      $scope.countdownShortBreak = 7500;

      $scope.countdownLongBreak = 112500;

      $scope.pomodoroRunning = true;
      
      $scope.shortBreakRunning = false;
      
      $scope.longBreakRunning = false;

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

      $scope.pomodoro = function() {

        $state.go('dashboard.pomodoroTimer');
        $scope.pomodoroRunning = true;
        $scope.shortBreakRunning = false;
        $scope.longBreakRunning = false;
        $scope.resetTimer('pomodoro');

      };

      $scope.shortBreak = function() {

        $state.go('dashboard.shortBreakTimer');
        $scope.pomodoroRunning = false;
        $scope.shortBreakRunning = true;
        $scope.longBreakRunning = false;
        $scope.resetTimer('shortBreak');

      };

      $scope.longBreak = function() {

        $state.go('dashboard.longBreakTimer');
        $scope.pomodoroRunning = false;
        $scope.shortBreakRunning = false;
        $scope.longBreakRunning = true;
        $scope.resetTimer('longBreak');

      };

    }

  ]);