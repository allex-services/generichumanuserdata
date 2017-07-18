function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['allex_genericuserdataservice']
    },
    sinkmap: {
      dependencies: ['allex_genericuserdataservice']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
