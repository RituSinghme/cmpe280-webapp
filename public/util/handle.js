var crypto = require('crypto');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '@gmail.com',
        pass: ''
    }

});

function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len).toUpperCase();   // return required number of characters
}

function sendEmail(email){
    var mailOptions = {
        from: '@gmail.com',
        to: email,
        subject: 'Validation code',
        text: randomValueHex(4) + "-" + randomValueHex(4)
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);

        }
    });
}

module.exports.sendEmail = sendEmail;
