'use strict';

angular
  .module('core')
  .controller('TimerPomodoroController', ['$scope', '$state', '$stateParams', 'Timer', 'Ding',

    function ($scope, $state, $stateParams, Timer, Ding) {

      $scope.timerRunning = false;

      $scope.countdown = 5; // 25 minutes = 937500

      Timer.init($scope);

      $scope.startTimer = function (){
        Timer.startTimer();
      };
      
      $scope.stopTimer = function (){
        Timer.stopTimer();
      };

      $scope.resetTimer = function() {
        $scope.startTimer();
        Timer.resetTimer(937500);
      };

      $scope.$on('timer-stopped', function (event, data){
        console.log(data);
        if (data.seconds === 0 && data.minutes === 0) {
          $scope.counters.pomodoroCounter += 1;
          console.log($scope.counters.pomodorCounter);
          if (($scope.counters.pomodoroCounter %4 === 0 && $scope.counters.shortBreakCounter %3 === 0) && ($scope.counters.pomodoroCounter !== 0 && $scope.counters.shortBreakCounter !== 0)) {
            //Ding.ding();
            $('#longBreakLink').click();
          } else if (($scope.counters.pomodoroCounter %4 !== 0 && $scope.counters.shortBreakCounter %3 !== 0) || ($scope.counters.pomodoroCounter === 0 || $scope.counters.shortBreakCounter === 0)) {
            //Ding.ding();
            $('#shortBreakLink').click();
          }
        }
      });
    
    }

]);