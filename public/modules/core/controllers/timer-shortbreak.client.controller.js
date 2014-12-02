'use strict';

angular
  .module('core')
  .controller('TimerShortBreakController', ['$scope', 'timer',

    function ($scope, timer) {

      this.timer = timer;
      var self = this;

      $scope.countdown = timer.countdown;
      var seconds = 300; //should be 5 minutes or 300 seconds
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