'use strict';

angular.module('core').factory('ding', [
  function() {
    // Ding service logic
    // ...

    // Public API
    return {
      ding : function() {
        var ding = new Howl({
          urls: ['modules/core/music/alarm-clock.mp3'],
          sprite: {
            brief: [0, 2800]
          }
        })
        ding.play('brief');
      }
    };
  }
]);