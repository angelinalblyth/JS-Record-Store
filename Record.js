const _ = require("lodash");

const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.printProperties = function () {
  return ("Artist: " + this.artist + ", Title: " + this.title + ", Genre: " + this.genre + ", Costs: £" + this.price);
};


module.exports = Record;
