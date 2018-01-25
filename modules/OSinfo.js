var os = require('os');
var colors = require('colors');
var formatTime = require('../modules/formatTime');

colors.setTheme ({
  
  warn: ['red', 'bold'],
  exit: ['red', 'bgWhite']

});

function getOSinfo() {
    
    var type = os.type();
    
    if (type === 'Darwin') {
    
        type = 'OSX';
    
    } else if(type === 'Windows_NT') {
    
        type = 'Windows';
    
    }
    
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var speed = os.cpus()[0].speed;
    var uptime = formatTime.print(os.uptime());
    var userInfo = os.userInfo();
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('CPU speed:'.magenta, speed  + ' MHz');
    console.log('Uptime: ~'.green, uptime);
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.grey, userInfo.homedir);

}

exports.print = getOSinfo;