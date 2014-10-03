'use strict';

(function() {
  describe('TimerPomodoroController', function() {
    //Initialize global variables
    var scope,
      TimerPomodoroController;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    var rootScope;
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      TimerPomodoroController = $controller('TimerPomodoroController', {
        $scope: scope
      });

        spyOn(TimerPomodoroController.timer, 'startTimer');
        spyOn(TimerPomodoroController.timer, 'stopTimer');
        spyOn(TimerPomodoroController.timer, 'resetTimer');
    }));

    it('startTimer should call startTimer function from timer service', function() {
      scope.startTimer();
      expect(TimerPomodoroController.timer.startTimer).toHaveBeenCalled();
    });

    it('stopTimer should call stopTimer function from timer service', function () {
      scope.stopTimer();
      expect(TimerPomodoroController.timer.stopTimer).toHaveBeenCalled();
    });

    it('stopTimer should call stopTimer function from timer service', function () {
      scope.resetTimer();
      expect(TimerPomodoroController.timer.stopTimer).toHaveBeenCalled();
      expect(TimerPomodoroController.timer.resetTimer).toHaveBeenCalledWith(5);
    });

  });
})();

