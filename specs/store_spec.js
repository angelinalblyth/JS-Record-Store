const assert = require("assert");
const Store = require("../Store.js");
const Record = require("../Record.js");

describe("Store", function(){

  let store;
  let record;

  beforeEach(function(){
    store = new Store("Superfly Records", "Glasgow", 500);
    record = new Record("Miike Snow", "iii", "Indie Rock", 15);
  })

  it('Store has a name', function(){
    assert.deepStrictEqual(store.name, "Superfly Records")
  })

  it('Store has a city', function(){
    assert.deepStrictEqual(store.city, "Glasgow")
  })

  it('Store has an empty inventory', function(){
    assert.deepStrictEqual(store.inventory.length, 0)
  })

  it('Store has a till balance', function(){
    assert.deepStrictEqual(store.till, 500);
  })

  it('Can add a record to the Stores inventory', function(){
    store.addRecord(record);
    assert.deepStrictEqual(store.inventory.length, 1)
  })

  // xit('Can remove a record from the stores inventory')
  // store.addRecord(record);
  // store.removeRecord(record);
  // assert.deepStrictEqual(store.inventory.length, 0)

  
})
