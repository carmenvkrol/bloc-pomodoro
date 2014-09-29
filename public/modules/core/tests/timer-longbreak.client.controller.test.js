'use strict';

(function() {
  describe('TimerLongBreakController', function() {
    //Initialize global variables
    var scope,
      TimerLongBreakController;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    var rootScope;
    beforeEach(inject(function($injector) {
            rootScope = $injector.get('$rootScope');
                spyOn(rootScope, '$broadcast');
    }));

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      TimerLongBreakController = $controller('TimerLongBreakController', {
        $scope: scope
      });
    }));

    it('should initialize timerRunning to false', function() {
      expect(scope.timerRunning).toBeFalsy();
    });

    it('should start the timer', function () {
        scope.startTimer();
        expect(rootScope.$broadcast).toHaveBeenCalledWith('timer-start');
        expect(scope.timerRunning).toBeTruthy();
    });

    it('should stop the timer', function(){
        scope.stopTimer();
        expect(rootScope.$broadcast).toHaveBeenCalledWith('timer-stop');
        expect(scope.timerRunning).toBeFalsy();
    });

    it('should reset the timer', function(){
        scope.startTimer();
        scope.resetTimer(112500);
        expect(rootScope.$broadcast).toHaveBeenCalledWith('timer-start');
        expect(rootScope.$broadcast).toHaveBeenCalledWith('timer-set-countdown', 112500);
        expect(scope.countdown).toEqual(112500);       
    });


  });
})();

