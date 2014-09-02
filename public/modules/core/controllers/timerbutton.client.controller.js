'use strict';


angular
  .module('core')
  .controller('TimerButtonController', ['$scope',

    function ($scope) {

      $scope.pomodoroRunning = true;
      $scope.shortBreakRunning = false;
      $scope.longBreakRunning = false;


      $scope.pomodoro = function() {

        $scope.pomodoroRunning = true;
        $scope.shortBreakRunning = false;
        $scope.longBreakRunning = false;

      };

      $scope.shortBreak = function() {

        $scope.pomodoroRunning = false;
        $scope.shortBreakRunning = true;
        $scope.longBreakRunning = false;

      };

      $scope.longBreak = function() {

        $scope.pomodoroRunning = false;
        $scope.shortBreakRunning = false;
        $scope.longBreakRunning = true;

      };

    }

  ]);
