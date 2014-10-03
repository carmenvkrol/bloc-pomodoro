'use strict';

(function() {
  describe('TimerShortBreakController', function() {
    //Initialize global variables
    var scope,
      TimerShortBreakController;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      TimerShortBreakController = $controller('TimerShortBreakController', {
        $scope: scope
      });

      spyOn(TimerShortBreakController.timer, 'startTimer');
      spyOn(TimerShortBreakController.timer, 'stopTimer');
      spyOn(TimerShortBreakController.timer, 'resetTimer');
    }));

    it('startTimer should call startTimer function from timer service', function() {
      scope.startTimer();
      expect(TimerShortBreakController.timer.startTimer).toHaveBeenCalled();
    });

    it('stopTimer should call stopTimer function from timer service', function () {
      scope.stopTimer();
      expect(TimerShortBreakController.timer.stopTimer).toHaveBeenCalled();
    });

    it('stopTimer should call stopTimer function from timer service', function () {
      scope.resetTimer();
      expect(TimerShortBreakController.timer.stopTimer).toHaveBeenCalled();
      expect(TimerShortBreakController.timer.resetTimer).toHaveBeenCalledWith(5);
    });

  });
})();

