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
			resetTimer: function(callback) {
				callback();
			}
		};
	}
]);