'use strict';

angular.module('core').controller('TimerButtonsController', ['$scope',
	function($scope) {
		// Timer buttons controller logic
		// ...

    $scope.counters = {
      pomodoroCounter: 0,
      shortBreakCounter: 0
    };

	}
]);