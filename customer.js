const _ = require("lodash");

const Customer = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.inventory = [];
}

Customer.prototype.addRecord = function(record){
  this.inventory.push(record);
}


module.exports = Customer;
