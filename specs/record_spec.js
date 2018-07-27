const assert = require("assert");
const Record = require("../Record.js");

describe("Record", function(){

  let record;

  beforeEach(function(){
    record = new Record("Miike Snow", "iii", "Indie Rock", 15);
  })

  it('Record has a artist', function(){
    assert.deepStrictEqual(record.artist, "Miike Snow");
  })

  it('Record has a title', function(){
    assert.deepStrictEqual(record.title, "iii");
  })

  it('Record has a genre', function(){
    assert.deepStrictEqual(record.genre, "Indie Rock");
  })

  it('Record has a price', function(){
    assert.strictEqual(record.price,15);
  })

  it('Can print out a records property', function(){
    const expected = "Artist: Miike Snow, Title: iii, Genre: Indie Rock, Costs: £15";
    assert.deepStrictEqual(record.printProperties(), expected);
  })

})
