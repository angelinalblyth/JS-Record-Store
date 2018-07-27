const assert = require("assert");
const Customer = require("../Customer.js");
const Record = require("../Record.js");

describe("Customer", function(){

  let customer;
  let record1, record2, record3, record4;

  beforeEach(function(){
    customer = new Customer("Angelina", 50);
    record1 = new Record("Miike Snow", "iii", "Indie Rock", 15);
    record2 = new Record("Tame Impala", "Currents", "Spacy", 10);
    record3 = new Record("The Neighbourhood", "I Love You", "Indie Rock", 12);
    record4 = new Record("Twenty One Pilots", "Blurryface", "Rock", 17);
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
    customer.addRecord(record1);
    assert.deepStrictEqual(customer.inventory.length, 1)
  })



})
