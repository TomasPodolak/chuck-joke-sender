import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const googleUsername = process.env.GMAIL_USERNAME;
const googlePassword = process.env.GMAIL_PASSWORD;
const receivers = process.env.CHUCK_RECEIVERS;

let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: googleUsername,
        pass: googlePassword
    }
}));

function SendMail(message){
    const mailOptions = {
        from: googleUsername,
        to: receivers,
        subject: 'Chuck sent you an joke',
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
         if (error) {
             console.log(error);  
         } else {     
             console.log('Email sent: ' + info.response);  
         }   
    });
}

export { SendMail }
