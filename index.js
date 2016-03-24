#!/usr/bin/env node

'use stict';

var childProcess = require("child_process");
var amount = process.argv.slice(2)[0] || 1;

while (amount--) {
  if (process.platform === 'darwin') {
    childProcess.spawn('open', ['https://upload.wikimedia.org/wikipedia/bar/2/27/Hello_Kitty_logo.svg']);
  }

  if (process.platform === 'win32') {
    childProcess.spawn('start', ['https://upload.wikimedia.org/wikipedia/bar/2/27/Hello_Kitty_logo.svg']);
  }
}

