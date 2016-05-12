"use strict";
var file = require("../helper/file");
var ncp = require("copy-paste");

exports.run = function(name) {
  var items = file.read('../schema.json');
  if(items[name]) {
    ncp.copy(items[name].command, function () {
      console.log("Command copied. Paste it and run");
    });
  } else {
    console.error("\nCommand doesn't exist\n");
  }
};
