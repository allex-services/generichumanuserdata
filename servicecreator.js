function createGenericHumanUserDataService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function GenericHumanUserDataService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(GenericHumanUserDataService, factoryCreator, require('./storagedescriptor'));
  
  GenericHumanUserDataService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  GenericHumanUserDataService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return GenericHumanUserDataService;
}

module.exports = createGenericHumanUserDataService;
