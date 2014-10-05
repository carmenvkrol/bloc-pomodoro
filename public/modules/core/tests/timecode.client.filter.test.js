'use strict';

(function() {
  describe('Filter: timecode', function() {
    //Initialize global variables
    var timecode;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function ($filter) {
        timecode = $filter('timecode');
    }));

    it('5 should return 0:05', function() {
        var result = timecode(5);
        expect(result).toEqual('0:05');
    });

    it('60 should return 1:00', function(){
        var result = timecode(60);
        expect(result).toEqual('1:00');
    });

    it('1.4 should return 0:01', function() {
        var result = timecode(1.4);
        expect(result).toEqual('0:01');
    });

    it('95 should return 1:35', function(){
        var result = timecode(95);
        expect(result).toEqual('1:35');
    });

  });
})();