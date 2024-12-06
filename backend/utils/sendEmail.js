const nodeMailer = require('nodemailer')

const sendEmail = async(options)=>{
    
    const transporter = nodeMailer.createTransport({
        service:process.env.SMTP_SERVICE,
        port:587,
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.SMTP_PASS
        }
    })
   
    const mailOptions = {
        from:process.env.SMTP_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    transporter.verify(function(error, success) {
        if (error) {
            console.log('Error verifying SMTP connection:', error);
        } else {
            console.log('SMTP connection verified');
        }
    });
        
        await transporter.sendMail(mailOptions)
    
}


module.exports = sendEmail