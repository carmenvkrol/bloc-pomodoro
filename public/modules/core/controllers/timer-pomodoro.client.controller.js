'use strict';

angular
  .module('core')
  .controller('TimerPomodoroController', ['$scope', 'timer',

    function ($scope, timer) {

      this.timer = timer;
      var self = this;

      $scope.countdown = timer.countdown;
      var seconds = 1500; //should be 25 minutes or 1500 seconds
      self.timer.resetTimer(seconds);

      $scope.startTimer = function() {
        self.timer.startTimer(seconds);
      };

      $scope.stopTimer = function() {
        self.timer.stopTimer();
      };

      $scope.resetTimer = function() {
        self.timer.stopTimer();
        self.timer.resetTimer(seconds);
      };
    
    }

]);