'use strict';

angular
  .module('core')
  .controller('TimerPomodoroController', ['$scope', '$state', '$stateParams', 'Timer',

    function ($scope, $state, $stateParams, Timer) {

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
          $state.go('dashboard.shortBreakTimer');
        }
      });
    
    }

]);