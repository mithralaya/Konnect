"use strict";
var file = require("../helper/file");
var W = require("TFWhatIs");

exports.list = function() {
  var items = file.read('../schema.json');
  if (!W.isFalsey(items)) {
    console.log("\n\t\tName\t\t\t\tCommand\n");
    W.for(items, function(key, item, items){
      console.log("\t\t"+key+"\t\t\t\t"+item+"");
    });
    console.log("\n");
  } else {
    console.error("Nothing exist. Please add some commands");
  }
};
