const assert = require("assert");
const Store = require("../Store.js");
const Record = require("../Record.js");

describe("Store", function(){

  let store;
  let record, record2;

  beforeEach(function(){
    store = new Store("Superfly Records", "Glasgow");
    record = new Record("Miike Snow", "iii", "Indie Rock", 15);
    record2 = new Record("Tame Impala", "Currents", "Spacy", 10);
    record3 = new Record("The Neighbourhood", "I Love You", "Indie", 12);
    record4 = new Record("Twenty One Pilots", "Blurryface", "Rock", 17);
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
    assert.deepStrictEqual(store.till, 0);
  })

  it('Can add a record to the Stores inventory', function(){
    store.addRecord(record);
    assert.deepStrictEqual(store.inventory.length, 1)
  })

  // xit('Can remove a record from the stores inventory')
  // store.addRecord(record);
  // store.removeRecord(record);
  // assert.deepStrictEqual(store.inventory.length, 0)

  it('Can view all properties of inventory', function(){
    store.addRecord(record);
    store.addRecord(record2);
    const expected = ["Artist: Miike Snow, Title: iii, Genre: Indie Rock, Costs: £15", "Artist: Tame Impala, Title: Currents, Genre: Spacy, Costs: £10"];
    const actual = store.getAllInventoryProperty()
    assert.deepStrictEqual(actual, expected)
  })

  it('Store can sell a record', function(){
    store.sellRecord(record);
    assert.deepStrictEqual(store.till, 15);
  })

  it('reports the financial situation of the Store', function() {
    store.addRecord(record);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.sellRecord(record2);
    const expected = 'The store balance is 10. The inventory value is 54.';
    assert.deepStrictEqual(store.getFinancialSituation(), expected);
  })

  it('view all Records of a given Genre')

})
