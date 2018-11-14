const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'nb5pjbgor7apfiic@ethereal.email',
            pass: 'PggzHzUzhPD4kgamGX'
        }
    });

    let mailOptions = {
        from: '"Marcos Vinicius" <marcos@vinicius.com>', // de
        to: 'flavio@example.com', // para
        subject: 'Um A ✔',
        text: 'Vale um A esse trabalho?', //texto puro 
        html: '<b>Vale um A esse trabalho?</b>' // texto html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Mensagem enviada: %s', info.messageId);
        console.log(' URL Para visualizar a mensagem: %s', nodemailer.getTestMessageUrl(info));
    });
});
