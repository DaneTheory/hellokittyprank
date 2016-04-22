#!/usr/bin/env node

'use stict';

var childProcess = require("child_process");
var command = process.argv.slice(2) || [];
var helloKittyUrl = 'https://upload.wikimedia.org/wikipedia/bar/2/27/Hello_Kitty_logo.svg';

function open() {
  if (process.platform === 'darwin') {
    childProcess.spawn('open', [ helloKittyUrl ]);
  }

  if (process.platform === 'win32') {
    childProcess.spawn('start', [ helloKittyUrl ]);
  }
}

if (command.length === 0 || command[0] === 'help') {
  // This is gross, but will work on older versions of Node
  var help = 'hellokittyprank\nversion: 2.0.0\n\nhellokittyprank [command] [arguments]\n\n';
  help += 'commands:\n\ninterval [miliseconds]  opens window at a set amount of time\n'
  help += 'amount [number]         opens the amount windows passed in all at once\n'
  console.log(help)
}

if (command[0] === 'amount')  {
  while (command[1]--) {
    open();
  }

} else if (command[0] === 'interval') {
  setInterval(open, command[1]);
}

