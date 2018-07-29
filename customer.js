const _ = require("lodash");

const Customer = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.inventory = [];
}

Customer.prototype.buyRecord = function(record){
  if(this.wallet >= record.price){
    this.inventory.push(record);
    this.wallet -= record.price;
  }else {
    return("You can't afford this.");
  }
}

Customer.prototype.sellRecord = function (store, recordtoSell) {
  //check the stores wallet to see if they can pay for the record the customer is wanting to selling
  if(store.till >= recordtoSell.price){
    //if it is fine, remove the price from the stores wallet
    store.till -= recordtoSell.price;
    //add the amount to the customers wallet
    this.wallet += recordtoSell.price;
    //remove the record from the customers inventory array
    _.remove(this.inventory, function(record){
      return record === recordtoSell;
    })
    //push it to the stores inventory array
    store.inventory.push(recordtoSell);
  }
};

Customer.prototype.totalValueOfCollection = function () {
  var amounts = _.map(this.inventory, function(record){
    return record.price;
  });
  return _.sum(amounts)
};

Customer.prototype.filterCollection = function (genre) {
  if(!genre) return this.inventory;
  return _.filter(this.inventory, function(record) {
    return record.genre === genre;
  });
},

Customer.prototype.viewMostValuable = function () {
  return _.maxBy(this.inventory, "price");
};

Customer.prototype.sortRecords = function (property, sortBy) {
  return _.orderBy(this.inventory,[property], sortBy)
};

Customer.prototype.compareInventoryValue = function (customer) {
  if(customer.totalValueOfCollection > this.totalValueOfCollection){
    return (customer.name + "'s collection is more valuable")
  }else {
    return (this.name + "'s collection is more valuable")
  }
};

// Customer.prototype.compareInventory = function (customer) {
//

// };


module.exports = Customer;
