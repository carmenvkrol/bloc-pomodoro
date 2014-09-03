'use strict';


angular
  .module('core')
  .controller('TimerController', ['$scope', '$timeout',

    function($scope, $timeout) {

      $scope.timerRunning = false;

      $scope.countdownPomodoro = 937500;

      $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
      };
 
      $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
      };

      $scope.resetTimer = function (){
        $scope.startTimer();
        $scope.countdownPomodoro = 937500;
        $scope.$broadcast('timer-set-countdown', $scope.countdownPomodoro);
      };

    }

  ]);