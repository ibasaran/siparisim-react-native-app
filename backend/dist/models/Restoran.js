"use strict";

var mongoose = require('mongoose');

var RestoranSchema = mongoose.Schema({
  adi: String,
  resmi: String,
  menu: [{
    adi: String,
    fiyat: String
  }]
});
module.exports = mongoose.model('Restoran', RestoranSchema);