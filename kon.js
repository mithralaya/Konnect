"use strict";

var program = require('commander');

//commands
var list = require('./command/list');
var add = require('./command/add');
var rename = require('./command/rename');
var del = require('./command/delete');

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
    list.list();
  });
program
  .command('add <name> <command> [keywords...]')
  .description('add a command')
  .action(function(env) {
    console.log(program.args[2]);
    add.add(program.args[0], program.args[1], program.args[2]);
  });
program
  .command('rename <oldName> <newName>')
  .description('rename a command name')
  .action(function(env) {
    rename.rename(program.args[0], program.args[1]);
  });
program
  .command('recommand <name> <newCommand>')
  .description('recommand by name')
  .action(function(env) {
    add.add(program.args[0], program.args[1]);
  });
program
  .command('delete <name>')
  .description('delete by name')
  .action(function(env) {
    del.del(program.args[0]);
  });

program
  .parse(process.argv);

program.allowUnknownOption = function(arg) {
    this._allowUnknownOption = arguments.length === 0 || arg;
    return this;
};
