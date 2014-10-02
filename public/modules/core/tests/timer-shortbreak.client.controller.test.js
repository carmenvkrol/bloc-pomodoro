'use strict';

(function() {
  describe('TimerShortBreakController', function() {
    //Initialize global variables
    var scope,
      TimerShortBreakController;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    var rootScope;
    beforeEach(inject(function($injector) {
            rootScope = $injector.get('$rootScope');
                spyOn(rootScope, '$broadcast');
    }));

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      TimerShortBreakController = $controller('TimerShortBreakController', {
        $scope: scope
      });

      spyOn(TimerShortBreakController.Ding, 'ding');
    }));

    // var dingSpy, 
    //     ding;
    // beforeEach(function(){
    //     dingSpy = {
    //       ding : function() {
    //         var ding = new Howl({
    //             urls: [''],
    //             sprite: {
    //             brief: [0, 3000]
    //             }
    //         })
    //         ding.play('brief');
    //         }  
    //     }
    //     spyOn(dingSpy, 'ding');
    // });

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
        scope.resetTimer(7500);
        expect(rootScope.$broadcast).toHaveBeenCalledWith('timer-start');
        expect(rootScope.$broadcast).toHaveBeenCalledWith('timer-set-countdown', 7500);
        expect(scope.countdown).toEqual(7500);       
    });

    it('should switch timers', function(){
        scope.counters = {
          shortBreakCounter: 0
        };
        scope.switchTimer();
        expect(TimerShortBreakController.Ding.ding).toHaveBeenCalled();
        expect(scope.counters.shortBreakCounter).toEqual(1);
        //TEST click on pomodoroLink
    });

    it ('should switch to pomodoro Timer when reaches 0', function(){
        scope.counters = {
          shortBreakCounter: 0
        };

        var switchTimerSpy = spyOn(scope, 'switchTimer');
        jasmine.clock().install();

        setTimeout(function(){
            switchTimerSpy();
        }, 300);

        var data = {
            seconds: 0,
            minutes: 0
        };

        scope.$broadcast('timer-stopped', data);
        
        jasmine.clock().tick(301);
        expect(switchTimerSpy).toHaveBeenCalled();
        jasmine.clock().uninstall();
    });


  });
})();

