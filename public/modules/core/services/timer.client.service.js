'use strict';

angular.module('core').factory('timer', [
	'$interval', 'Ding',
	function($interval, Ding) {
		// Timer service logic
		// ...
		// Public API
		var countdown;
		var stop;
		return {
			countdown: function(){ 
				return countdown;
			},
			stop: function(){
				return stop;
			},
			startTimer: function(time) {
				var self = this;
				if (angular.isDefined(stop)) return;
				stop = $interval(function(){
					countdown = time;
					if (time === 0) {
						Ding.ding();
						self.stopTimer();
					} else if (time > 0) {
						time--;
					}
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
			},
		};
	}
]);