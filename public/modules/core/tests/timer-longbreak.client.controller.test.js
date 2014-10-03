'use strict';

(function() {
  describe('TimerLongBreakController', function() {
    //Initialize global variables
    var scope,
      TimerLongBreakController;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    var rootScope;
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      TimerLongBreakController = $controller('TimerLongBreakController', {
        $scope: scope
      });

        spyOn(TimerLongBreakController.timer, 'startTimer');
        spyOn(TimerLongBreakController.timer, 'stopTimer');
        spyOn(TimerLongBreakController.timer, 'resetTimer');
    }));

    it('startTimer should call startTimer function from timer service', function() {
      scope.startTimer();
      expect(TimerLongBreakController.timer.startTimer).toHaveBeenCalled();
    });

    it('stopTimer should call stopTimer function from timer service', function () {
      scope.stopTimer();
      expect(TimerLongBreakController.timer.stopTimer).toHaveBeenCalled();
    });

    it('stopTimer should call stopTimer function from timer service', function () {
      scope.resetTimer();
      expect(TimerLongBreakController.timer.stopTimer).toHaveBeenCalled();
      expect(TimerLongBreakController.timer.resetTimer).toHaveBeenCalledWith(900);
    });

  });
})();

