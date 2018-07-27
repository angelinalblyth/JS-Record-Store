const _ = require("lodash");

const Store = function(name, city){
  this.name = name;
  this.city = city;
  this.till = 0;
  this.inventory = [];
}

Store.prototype.addRecord = function(record){
  this.inventory.push(record);
}

Store.prototype.getAllInventoryProperty = function () {
  return _.map(this.inventory, record => record.printProperties());
};

Store.prototype.sellRecord = function (record) {
  this.till += record.price
};



module.exports = Store;
