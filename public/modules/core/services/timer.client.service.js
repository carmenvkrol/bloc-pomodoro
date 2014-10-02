'use strict';

angular.module('core').factory('Timer', [
	'$interval',
	function($interval) {
		// Timer service logic
		// ...
		// Public API
		var countdown;
		var stop;
		return {
			countdown: function(){ 
				return countdown;
			},
			startTimer: function(time) {
				if (angular.isDefined(stop)) return;
				stop = $interval(function(){
					countdown = time;
					time--;
				}, 1000);
			},
			stopTimer: function() {
				if (angular.isDefined(stop)) {
        	$interval.cancel(stop);
        	stop = undefined;
      	}
			},
			resetTimer: function(time) {
				countdown = time;
			}
		};
	}
]);