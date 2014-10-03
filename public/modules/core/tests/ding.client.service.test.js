'use strict';

(function() {
  describe('dingservice', function() {
    //Initialize global variables
    var ding;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function(_ding_) {
      ding = _ding_;
    }));

    it('should have ding function', function() {
        expect(angular.isFunction(ding.ding)).toBe(true);
    });

  });
})();

