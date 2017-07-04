function createServicePack(execlib) {
  'use strict';
  return {
    service: {
      dependencies: ['allex:genericuserdata']
    },
    sinkmap: {
      dependencies: ['allex:genericuserdata']
    }, /*
    tasks: {
      dependencies: []
    }
    */
  }
}

module.exports = createServicePack;
