var Factory = function(name, type, initArgs){
  this.name = name;
  this.type = type;
  this.initArgs = initArgs || [];
};

Factory.prototype.build = function(){
  // Hacky solution since the usage of 'new' prevents adding arguments with
  // apply
  var FactoryInstance = function(){
    return this.type.apply(this.initArgs);
  };
  FactoryInstance.prototype = this.type;
  
  return new FactoryInstance(); 
};


Factory.prototype.buildList = function(opts){
  opts = opts || {};
  var total = opts.count ||  1,
      current = 0,
      objects = [];
  for(; current < total; current++){
    objects.push(this.build());
  };
  return objects;
};

module.exports = Factory;
