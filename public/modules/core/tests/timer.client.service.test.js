'use strict';

(function() {
  describe('timerservice', function() {
    //Initialize global variables
    var timer;
    var $interval;
    var ding;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function(_timer_, _$interval_, _ding_) {
      timer = _timer_;
      $interval = _$interval_;
      ding = _ding_;
    }));

    it('should have countdown function', function() {
        expect(angular.isFunction(timer.countdown)).toBe(true);
    });

    it('countdown function should return countdown', function() {
        var result = timer.countdown();
        expect(result).toBe(undefined);
    });

    it('should have stop function', function(){
        expect(angular.isFunction(timer.stop)).toBe(true);
    });

    it('stop function should return stop', function() {
        var result = timer.stop();
        expect(result).toBe(undefined);
    });

    it('should have startTimer function', function() {
        expect(angular.isFunction(timer.startTimer)).toBe(true);
    });

    it('startTimer should stop Timer and ding when countdown reaches zero', function(){
        spyOn(timer, 'stopTimer');
        spyOn(ding, 'ding');
        timer.startTimer(0);
        expect(timer.stopTimer).toHaveBeenCalled();
        expect(ding.ding).toHaveBeenCalled();
    });

    it('startTimer should decrease by 1 second each interval', function() {
        timer.startTimer(4);
        $interval.flush(1);
    });

    it('should have stopTimer function', function() {
        expect(angular.isFunction(timer.stopTimer)).toBe(true);
    });

    it('stopTimer function should cancel timer and set stop to undefined', function(){
        spyOn($interval, 'cancel');
        angular.isDefined(stop);
        expect($interval.cancel).toHaveBeenCalledWith('stop');
        expect(timer.stop()).toEqual(undefined);
    });

    it('should have resetTimer function', function() {
        expect(angular.isFunction(timer.resetTimer)).toBe(true);
    });

    it('resetTimer function should set countdown equal to time', function() {
        timer.resetTimer(5);
        expect(timer.countdown()).toEqual(5);
    });

  });
})();

