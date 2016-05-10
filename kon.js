"use strict";

var program = require('commander');

//commands
// var list = require('./command/list');
// var save = require('./command/save');
// var rename = require('./command/rename');
// var recommand = require('./command/recommand');
// var del = require('./command/delete');

program
  .version('1.0.0')
  .description('Quick way to run frequent and long commands')
  .usage('<name>');
program
  .command('*')
  .description('kon <name>')
  .action(function(env) {
    console.log('running...', env);
  });
program
  .command('list')
  .description('list all commands')
  .action(function(env) {
    console.log('listing...');
  });
program
  .command('add <name> <command>')
  .description('add a command')
  .action(function(env) {
    console.log('adding...', program.args[0], program.args[1]);
  });
program
  .command('rename <oldName> <newName>')
  .description('rename a command name')
  .action(function(env) {
    console.log('rename...', program.args[0], program.args[1]);
  });
program
  .command('recommand <name> <newCommand>')
  .description('recommand by name')
  .action(function(env) {
    console.log('recommand...', program.args[0], program.args[1]);
  });
program
  .command('delete <name>')
  .description('delete by name')
  .action(function(env) {
    console.log('recommand...', program.args[0], program.args[1]);
  });

program
  .parse(process.argv);

program.allowUnknownOption = function(arg) {
    this._allowUnknownOption = arguments.length === 0 || arg;
    return this;
};
