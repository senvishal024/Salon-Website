const nodemailer = require("nodemailer");

require("dotenv").config();

const transport = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.Email,
        pass: process.env.Pass
    }
});

const sendEmail = async (to, subject, text) => {

    console.log("Sending email to:", to);

    const info = await transport.sendMail({
        from: process.env.Email,
        to: to,
        subject: subject,
        text: text
    });

    console.log("Email sent:", info.messageId);
};

module.exports = sendEmail;