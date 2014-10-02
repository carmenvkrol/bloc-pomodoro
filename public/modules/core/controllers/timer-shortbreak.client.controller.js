'use strict';

angular
  .module('core')
  .controller('TimerShortBreakController', ['$scope', '$interval', 'Timer',

    function ($scope, $interval, Timer) {

      /*this.Ding = Ding;
      var self = this;*/

      $scope.countdown = Timer.countdown;
      Timer.resetTimer(5000);


      Timer.init($scope);

      $scope.startTimer = function() {
        Timer.startTimer(5000);
      };

      $scope.stopTimer = function() {
        Timer.stopTimer();
      };

      $scope.resetTimer = function() {
        Timer.stopTimer();
        Timer.resetTimer(5000);
      };

      /*$scope.switchTimer = function() {
        self.Ding.ding();
        $scope.counters.shortBreakCounter += 1;
        //$('#pomodoroLink').click();
        setTimeout(function () {
          $state.go('dashboard.pomodoroTimer');
        }, 300);
      };

      $scope.$on('timer-stopped', function (event, data){
        if (data.seconds === 0 && data.minutes === 0) {
          $scope.switchTimer();
        }
      });*/
    
    }

]);