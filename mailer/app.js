var nodemailer = require('nodemailer'); // dependancy injecteddddddddd*****
var cron = require('node-cron');
var mailServiceFactory = require('./service');
require('dotenv').config()
console.log("nodemailer start");



cron.schedule('* * * * *', function(){  //shedules function every minute
  var MailService = new mailServiceFactory();
  
  var opts = {
    nodemailer: nodemailer, // dependancy injected
    from: 'enardo@ycp.edu',
    to: 'enardo@returnlogic.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  MailService.emailMessage(opts);
});





var Probe = require('pmx').probe();

var counter = 1;

var metric = Probe.metric({  //pm2 stuff
name    : 'Counter',
value   : function() {
  return counter;
}
});

setInterval(function() {
counter++;
}, 1000);