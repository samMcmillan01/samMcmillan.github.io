
var EmailService = function(){

    return {
        emailMessage: function(opts){

           

            var nodemailer = opts.nodemailer; ///dependancy injection

            var transporter = nodemailer.createTransport({
                service: process.env.NODEMAILER_SERVICE,
                auth: {
                  user: process.env.NODEMAILER_USER,
                  pass: process.env.NODEMAILER_PASS
                }
              });
            
            var mailOptions = {
                from: 'enardo@ycp.edu',
                to: 'enardo@returnlogic.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
            });
        }
    }
};



module.exports = EmailService;