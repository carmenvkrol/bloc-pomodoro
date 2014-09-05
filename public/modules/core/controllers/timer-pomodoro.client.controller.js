'use strict';

angular
  .module('core')
  .controller('TimerPomodoroController', ['$scope', '$state',

    function ($scope, $state) {

      $scope.$on('timer-stopped', function (event, data){
        if (data.seconds === 0 && data.minutes === 0) {
          $state.go('dashboard.shortBreakTimer');
        }
      });
    
    }

]);