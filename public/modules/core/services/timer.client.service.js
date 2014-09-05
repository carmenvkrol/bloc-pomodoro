'use strict';

angular.module('core').factory('Timer', [
	function() {
		// Timer service logic
		// ...

		// Public API
		return {
			init: function(scope) {
				this.scope = scope;
			},
			startTimer: function() {
				this.scope.$broadcast('timer-start');
				this.scope.timerRunning = true;
			},
			stopTimer: function() {
				this.scope.$broadcast('timer-stop');
        this.scope.timerRunning = false;
			},
			resetTimer: function(num) {
				this.scope.countdown = num;
				this.scope.$broadcast('timer-set-countdown', this.scope.countdown);
			}
		};
	}
]);