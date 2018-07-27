const _ = require("lodash");

const Store = function(name, city){
  this.name = name;
  this.city = city;
  this.till = 500;
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

Store.prototype.getFinancialSituation = function () {
  // loop through all the Inventory
  var amounts = _.map(this.inventory, function(record){
    //find the price
    return record.price;
  });
  // add all the record prices together
  //return the total alongside the balance of the till
  return ('The store balance is ' + this.till + '. The inventory value is '+ _.sum(amounts) + '.');
};

Store.prototype.filterInventory = function (genre) {
  if(!genre) return this.inventory;
  return _.filter(this.inventory, function(record) {
    return record.genre === genre;
  });
},



module.exports = Store;
