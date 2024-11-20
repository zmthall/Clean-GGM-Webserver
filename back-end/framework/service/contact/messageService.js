import { ServiceError } from '../../../utility/error-handling/frameworkError';
import nodemailer from 'nodemailer';
import 'dotenv/config';

let authInfo = {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
};

export const messageService = {
    sendEmail: async (message) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true, //ssl
            auth: {authInfo},
            tls: {
                rejectUnauthorized: false
            }
        });
    
        try {
            const sendMessageResponse = await transporter.sendMail(message);
            return sendMessageResponse;
        } catch (error) {
            console.error(error);
            throw new ServiceError({ message: 'Failed to send email.', error });
        }
    }
}