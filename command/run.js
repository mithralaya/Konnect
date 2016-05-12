"use strict";
var file = require("../helper/file");

exports.run = function(name) {
  var items = file.read('../schema.json');
  if(items[name]) {
    console.log(items[name].command);
  } else {
    console.error("\nCommand doesn't exist\n");
  }
};
