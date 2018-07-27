const assert = require("assert");
const Customer = require("../Customer.js");
const Record = require("../Record.js");
const Store = require("../Store.js");

describe("Customer", function(){

  let customer, customer2;
  let record1, record2, record3, record4;

  beforeEach(function(){
    customer = new Customer("Angelina", 50);
    customer2 = new Customer("Abi", 10);
    record1 = new Record("Miike Snow", "iii", "Indie Rock", 15);
    record2 = new Record("Tame Impala", "Currents", "Spacy", 10);
    record3 = new Record("The Neighbourhood", "I Love You", "Indie Rock", 12);
    record4 = new Record("Twenty One Pilots", "Blurryface", "Rock", 17);
    store = new Store("Superfly Records", "Glasgow");
  })

  it('Customer has name', function(){
    assert.deepStrictEqual(customer.name, "Angelina");
  })

  it('Customer has a record collection', function(){
    assert.deepStrictEqual(customer.inventory.length, 0);
  })

  it('Customer has a wallet', function(){
    assert.deepStrictEqual(customer.wallet, 50);
  })

  it('Customer can add a record to their collection', function(){
    customer.buyRecord(record1);
    assert.deepStrictEqual(customer.inventory.length, 1)
  })

  it('Customer can buy a record if they can afford it', function(){
    customer.buyRecord(record1);
    assert.deepStrictEqual(customer.inventory.length, 1)
    assert.deepStrictEqual(customer.wallet, 35);
  })

  it('Customer can not afford a record', function(){
    customer2.buyRecord(record1);
    assert.deepStrictEqual(customer2.buyRecord(record1),"You can't afford this.")
  })

  it('Customer can sell a record to the store', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.sellRecord(store, record2);
    assert.deepStrictEqual(customer.wallet, 35);
    console.log(customer.inventory);
    assert.deepStrictEqual(customer.inventory, [record1]);
  })



})
