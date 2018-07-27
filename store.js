const _ = require("lodash");

const Store = function(name, city, till){
  this.name = name;
  this.city = city;
  this.till = till;
  this.inventory = [];
}

Store.prototype.addRecord = function(record){
  this.inventory.push(record);
}



module.exports = Store;
