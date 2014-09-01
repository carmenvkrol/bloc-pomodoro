'use strict';


angular
  .module('core')
  .controller('DashboardController', ['$scope',

    function($scope) {

      $scope.timerRunning = true;
 
      $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
      };
 
      $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
      };
 
      $scope.$on('timer-stopped', function (event, data){
        console.log('Timer Stopped - data = ', data);
      });

    }

  ]);

angular
  .module('core')
  .filter('numberFixedLen', function () {
    return function(a,b){
        return(1e4+a+'').slice(-b);
    };
  });