import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

if(!process.env.RESEND_API){
    console.log('Not provide resend api to .env file')
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
    console.log('send email', sendTo);
    try {
        const { data, error } = await resend.emails.send({
            from: 'Mynstro <onboarding@resend.dev>',
            to: sendTo,
            subject: subject,
            html: html,
        });
        if (error) {
            return console.error({ error });
        }
    } catch (error) {
        console.error({ error });
    }
}

export default sendEmail;