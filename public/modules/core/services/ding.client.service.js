'use strict';

angular.module('core').factory('Ding', [
  function() {
    // Ding service logic
    // ...

    // Public API
    return {
      ding : function() {
        var ding = new Howl({
          urls: ['modules/core/music/alarm-clock.mp3'],
          sprite: {
            brief: [0, 3000]
          }
        })
        ding.play('brief');
      }
    };
  }
]);