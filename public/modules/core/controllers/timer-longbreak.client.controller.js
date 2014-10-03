'use strict';

angular
  .module('core')
  .controller('TimerLongBreakController', ['$scope', 'timer',

    function ($scope, timer) {

      this.timer = timer;
      var self = this;

      $scope.countdown = timer.countdown;
      var seconds = 900; //should be 15 minutes
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