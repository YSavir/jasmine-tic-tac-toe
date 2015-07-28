var Factory = function(name, type, initArgs){
  this.name = name;
  this.type = type;
  this.initArgs = initArgs || [];
};

Factory.prototype.build = function(){
  return new this.type(this.initArgs);
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
