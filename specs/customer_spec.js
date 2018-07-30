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
    // console.log(customer.inventory);
    assert.deepStrictEqual(customer.inventory, [record1]);
  })

  it('total value of customers collection', function() {
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    assert.deepStrictEqual(customer.totalValueOfCollection(), 25);
  })

//Read this wrong and doesnt return the value. :/ 
  it('total value of all records of a given Genre', function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    customer.buyRecord(record4);
    const expected = [record1, record3];
    assert.deepStrictEqual(customer.filterCollection('Indie Rock'), expected);
  })

  it('view their most valuable record', function(){
    customer = new Customer("Bob", 500);
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    customer.buyRecord(record4);
    //console.log(customer.inventory);
    const expected = record4;
    assert.deepStrictEqual(customer.viewMostValuable(), expected);
  })

  it('sort their records by value. Ascending', function(){
    customer = new Customer("Bob", 500);
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    customer.buyRecord(record4);
    const expected = [record2, record3, record1, record4];
    assert.deepStrictEqual(customer.sortRecords("price", "asc"), expected);
  })

  it('sort their records by value. Descending', function() {
    customer = new Customer("Bob", 500);
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    customer.buyRecord(record4);
    const expected = [record4, record1, record3, record2];
    assert.deepStrictEqual(customer.sortRecords("price","desc"), expected);
  })

  it('compare the value of their collection with another RecordCollector', function(){
    customer1 = new Customer("Angelina", 500);
    customer2 = new Customer("Bob", 500);

    customer1.inventory.push(record1);
    customer2.inventory.push(record2);
    assert.deepStrictEqual(customer1.compareInventoryValue(customer2), "Angelina's collection is more valuable");
    assert.deepStrictEqual(customer2.compareInventoryValue(customer1), "Bob's collection is more valuable");
  })

  xit('bring back what CDs two customers have in common', function(){
    customer1 = new Customer("Angelina", 500);
    customer2 = new Customer("Bob", 500);

    customer1.inventory.push(record1);
    customer1.inventory.push(record2);
    customer2.inventory.push(record2);

    const expected = [record2];
    assert.deepStrictEqual(customer1.compareInventory(customer2), expected);
  })
})
