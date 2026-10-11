
const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.Email,
        pass: process.env.Pass
    }
});
transport.verify()
    .then(() => console.log("SMTP CONNECTION SUCCESS"))
    .catch((err) => console.error("SMTP CONNECTION ERROR:", err));

const sendEmail = async (to, subject, text) => {
    try {
        console.log("Sending email to:", to);
        console.log("Email account configured:", !!process.env.Email);
        console.log("Email password configured:", !!process.env.Pass);

        const info = await transport.sendMail({
            from: process.env.Email,
            to,
            subject,
            text
        });

        console.log("EMAIL SENT:", info.messageId);
        console.log("ACCEPTED:", info.accepted);
        console.log("REJECTED:", info.rejected);

        return info;
    } catch (error) {
        console.error("EMAIL ERROR:", error.message);
        throw error;
    }
};

module.exports = sendEmail;
