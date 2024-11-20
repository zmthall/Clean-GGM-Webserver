import { ServiceError } from '../../../utility/error-handling/frameworkError.js';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export const messageService = {
    sendEmail: async (email) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true, //ssl
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    
        try {
            const sendMessageResponse = await transporter.sendMail(email);
            transporter.close();
            return sendMessageResponse;
        } catch (error) {
            transporter.close();
            console.error(error);
            throw new ServiceError({ message: 'Failed to send email.', error });
        }
    },
    sendSMTP: async (email) => {
        const transporter = nodemailer.createTransport({
            host: process.env.BREVO_SMTP_SERVER,
            port: process.env.BREVO_PORT,
            secure: true,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.BREVO_USER,
                pass: process.env.BREVO_SMTP_KEY
            }
        })

        try {
            const sendMessageResponse = await transporter.sendMail(email);
            transporter.close();
            return sendMessageResponse;
        } catch (error) {
            transporter.close();
            console.error(error);
            throw new ServiceError({ message: 'Failed to send email.', error });
        }
    }
}