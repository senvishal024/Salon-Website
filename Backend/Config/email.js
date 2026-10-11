
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, text) => {
    try {
        console.log("Sending email to:", to);

        const { data, error } = await resend.emails.send({
            from: "Salon App <onboarding@resend.dev>",
            to: [to],
            subject,
            text
        });

        if (error) {
            console.error("RESEND EMAIL ERROR:", error);
            throw new Error(error.message || "Email sending failed");
        }

        console.log("EMAIL SENT:", data?.id);
        return data;
    } catch (error) {
        console.error("EMAIL ERROR:", error.message);
        throw error;
    }
};

module.exports = sendEmail;
